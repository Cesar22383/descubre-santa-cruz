import Link from "next/link";
import { notFound } from "next/navigation";
import { lugares } from "@/data/lugares";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LugarPage({ params }: Props) {
  const { slug } = await params;

  const lugar = lugares.find((item) => String(item.id) === slug);

  if (!lugar) {
    notFound();
  }

  const emoji =
    lugar.categoria === "Restaurantes"
      ? "🍽️"
      : lugar.categoria === "Salud"
      ? "🏥"
      : lugar.categoria === "Comercio"
      ? "🛍️"
      : lugar.categoria === "Educación"
      ? "🎓"
      : lugar.categoria === "Agricultura"
      ? "🌾"
      : lugar.categoria === "Deporte"
      ? "⚽"
      : lugar.categoria === "Cultura"
      ? "🎭"
      : "🎉";

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <Link href="/" className="font-bold hover:text-emerald-200">
            ← Volver a Descubre Santa Cruz
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
          {lugar.categoria}
        </span>

        <h1 className="mt-4 text-4xl font-extrabold text-slate-900">
          {lugar.nombre}
        </h1>

        <p className="mt-3 text-slate-600">
          📍 {lugar.ciudad}
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="flex h-80 items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-400">
            <span className="text-8xl">{emoji}</span>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Sobre este lugar
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {lugar.descripcion}
            </p>

            <div className="mt-6 space-y-3 text-slate-700">
              <p>
                📍 <strong>Dirección:</strong> {lugar.direccion}
              </p>

              {lugar.telefono && (
                <p>
                  📞 <strong>Teléfono:</strong> {lugar.telefono}
                </p>
              )}

              {lugar.horario && (
                <p>
                  🕐 <strong>Horario:</strong> {lugar.horario}
                </p>
              )}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {lugar.telefono && (
                <a
                  href={`tel:${lugar.telefono.replace(/\s/g, "")}`}
                  className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700"
                >
                  📞 Llamar
                </a>
              )}

              {lugar.whatsapp && (
                <a
                  href={`https://wa.me/${lugar.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-green-500 px-5 py-3 font-bold text-white hover:bg-green-600"
                >
                  💬 WhatsApp
                </a>
              )}

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${lugar.nombre}, ${lugar.direccion}, ${lugar.ciudad}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-100 px-5 py-3 font-bold text-slate-700 hover:bg-slate-200"
              >
                📍 Cómo llegar
              </a>
            </div>
          </div>
        </div>

        {lugar.productos && lugar.productos.length > 0 && (
          <section className="mt-10">
            <h2 className="text-3xl font-extrabold text-slate-900">
              🛍️ Productos
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {lugar.productos.map((producto) => (
                <article
                  key={producto.id}
                  className="rounded-2xl bg-white p-6 shadow-md"
                >
                  <div className="text-5xl">🛍️</div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {producto.nombre}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {producto.descripcion}
                  </p>

                  {producto.precio && (
                    <p className="mt-4 text-xl font-extrabold text-emerald-600">
                      {producto.precio}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {lugar.servicios && lugar.servicios.length > 0 && (
          <section className="mt-10 rounded-2xl bg-white p-7 shadow-md">
            <h2 className="text-2xl font-extrabold text-slate-900">
              📋 Servicios
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {lugar.servicios.map((servicio) => (
                <div
                  key={servicio}
                  className="rounded-xl bg-emerald-50 p-4 font-semibold text-emerald-800"
                >
                  ✓ {servicio}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <Link
            href="/"
            className="font-bold text-emerald-700 hover:text-emerald-900"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-slate-400">
        © 2026 Descubre Santa Cruz
      </footer>
    </main>
  );
}
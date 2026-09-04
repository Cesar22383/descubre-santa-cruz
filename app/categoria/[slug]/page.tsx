import Link from "next/link";
import { notFound } from "next/navigation";
import { categorias } from "@/data/categoria";
import { lugares } from "@/data/lugares";
import LugarCard from "@/components/LugarCard";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function crearSlug(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default async function CategoriaPage({ params }: Props) {
  const { slug } = await params;

  const categoria = categorias.find(
    (item) => crearSlug(item.nombre) === slug
  );

  if (!categoria) {
    notFound();
  }

  const lugaresCategoria = lugares.filter(
    (lugar) => crearSlug(lugar.categoria) === slug
  );

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="bg-emerald-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-lg font-extrabold hover:text-emerald-200"
          >
            🌄 Descubre Santa Cruz
          </Link>

          <Link
            href="/"
            className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-bold hover:bg-emerald-600"
          >
            Santa Cruz
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-500 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Link
            href="/"
            className="text-sm font-semibold text-emerald-200 hover:text-white"
          >
            ← Volver a Descubre Santa Cruz
          </Link>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 text-5xl backdrop-blur">
              {categoria.emoji}
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-200">
                Categoría
              </p>

              <h1 className="mt-1 text-4xl font-black md:text-5xl">
                {categoria.nombre}
              </h1>

              <p className="mt-2 text-emerald-100">
                {lugaresCategoria.length}{" "}
                {lugaresCategoria.length === 1 ? "lugar disponible" : "lugares disponibles"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {lugaresCategoria.length > 0 ? (
          <>
            <div className="mb-8">
              <p className="font-bold uppercase tracking-wider text-emerald-600">
                Explora
              </p>

              <h2 className="mt-1 text-3xl font-black text-slate-900">
                Lugares de {categoria.nombre}
              </h2>

              <p className="mt-2 text-slate-600">
                Encuentra lugares y servicios de Santa Cruz.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lugaresCategoria.map((lugar) => (
                <LugarCard
                  key={lugar.id}
                  lugar={lugar}
                  onClick={() => {}}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <div className="text-6xl">{categoria.emoji}</div>

            <h2 className="mt-5 text-2xl font-black text-slate-900">
              Todavía no hay lugares
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-slate-600">
              Aún no hemos registrado lugares en esta categoría.
              Pronto agregaremos más opciones para descubrir Santa Cruz.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
            >
              ← Explorar todas las categorías
            </Link>
          </div>
        )}

        {/* NAVEGACIÓN */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <Link
            href="/"
            className="font-bold text-emerald-700 hover:text-emerald-900"
          >
            ← Volver a todas las categorías
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="font-bold text-slate-900">
            🌄 Descubre Santa Cruz
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Directorio local de Santa Cruz
          </p>

          <p className="mt-4 text-sm text-slate-400">
            © 2026 Descubre Santa Cruz
          </p>
        </div>
      </footer>
    </main>
  );
}
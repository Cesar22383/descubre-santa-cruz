"use client";

import { useState } from "react";
import Link from "next/link";
import { lugares } from "@/data/lugares";
import Buscador from "@/components/Buscador";

const categorias = [
  { nombre: "Restaurantes", emoji: "🍽️", slug: "restaurantes" },
  { nombre: "Salud", emoji: "🏥", slug: "salud" },
  { nombre: "Comercio", emoji: "🛍️", slug: "comercio" },
  { nombre: "Educación", emoji: "🎓", slug: "educacion" },
  { nombre: "Agricultura", emoji: "🌾", slug: "agricultura" },
  { nombre: "Deporte", emoji: "⚽", slug: "deporte" },
  { nombre: "Cultura", emoji: "🎭", slug: "cultura" },
  { nombre: "Eventos", emoji: "🎉", slug: "eventos" },
];

function emojiCategoria(categoria: string) {
  switch (categoria) {
    case "Restaurantes":
      return "🍽️";
    case "Salud":
      return "🏥";
    case "Comercio":
      return "🛍️";
    case "Educación":
      return "🎓";
    case "Agricultura":
      return "🌾";
    case "Deporte":
      return "⚽";
    case "Cultura":
      return "🎭";
    case "Eventos":
      return "🎉";
    default:
      return "📍";
  }
}

export default function HomePage() {
  const [busqueda, setBusqueda] = useState("");

  const texto = busqueda.trim().toLowerCase();

  const resultados = lugares.filter((lugar) => {
    if (!texto) return true;

    return (
      lugar.nombre.toLowerCase().includes(texto) ||
      lugar.categoria.toLowerCase().includes(texto) ||
      lugar.ciudad.toLowerCase().includes(texto) ||
      lugar.descripcion.toLowerCase().includes(texto) ||
      lugar.servicios?.some((servicio) =>
        servicio.toLowerCase().includes(texto)
      ) ||
      lugar.productos?.some(
        (producto) =>
          producto.nombre.toLowerCase().includes(texto) ||
          producto.descripcion.toLowerCase().includes(texto)
      )
    );
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="bg-emerald-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-lg font-extrabold md:text-2xl"
          >
            🌄 Centro Poblado de Santa Cruz - Querecotillo
          </Link>

          <span className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-bold">
            Querecotillo
          </span>
        </div>
      </header>
      {/* PORTADA CON FOTO */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/santa-cruz-portada.jpg.png')",
        }}
      >
        {/* CAPA VERDE */}

        {/* CONTENIDO */}
        <div className="relative z-10 px-6 py-24 text-center text-white">
          <p className="font-bold text-emerald-200">
            📍 Centro Poblado de Santa Cruz - Querecotillo
          </p>

          <h1 className="mx-auto mt-5 max-w-6xl text-4xl font-extrabold md:text-6xl">
            Centro Poblado de Santa Cruz - Querecotillo
          </h1>

          <h2 className="mt-5 text-2xl font-bold text-emerald-100 md:text-3xl">
            Descubre nuestra comunidad
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white">
            Conoce nuestros negocios, servicios, instituciones,
            actividades y lugares.
          </p>

          <div className="mx-auto mt-8 max-w-3xl">
            <Buscador
              onBuscar={setBusqueda}
              placeholder="Busca restaurantes, ceviche, fútbol, odontología..."
            />
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      {!texto && (
        <section className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-bold text-emerald-600">
            EXPLORA
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Categorías de nuestra comunidad
          </h2>

          <p className="mt-2 text-slate-600">
            Haz clic en una categoría para conocer sus lugares.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {categorias.map((categoria) => {
              const cantidad = lugares.filter(
                (lugar) => lugar.categoria === categoria.nombre
              ).length;

              return (
                <Link
                  key={categoria.nombre}
                  href={`/categoria/${categoria.slug}`}
                  className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-5xl">
                    {categoria.emoji}
                  </div>

                  <h3 className="mt-4 font-extrabold text-slate-900">
                    {categoria.nombre}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {cantidad} lugar
                    {cantidad === 1 ? "" : "es"}
                  </p>

                  <div className="mt-4 font-bold text-emerald-600">
                    Ver lugares →
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* RESULTADOS */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold text-emerald-600">
            {texto
              ? "RESULTADOS DE BÚSQUEDA"
              : "DIRECTORIO LOCAL"}
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            {texto
              ? `Resultados para "${busqueda}"`
              : "Lugares de nuestra comunidad"}
          </h2>

          <p className="mt-2 text-slate-600">
            {texto
              ? `${resultados.length} resultado${
                  resultados.length === 1 ? "" : "s"
                } encontrado${
                  resultados.length === 1 ? "" : "s"
                }.`
              : "Conoce los negocios, instituciones y espacios del Centro Poblado de Santa Cruz."}
          </p>

          {resultados.length === 0 ? (
            <div className="mt-10 rounded-2xl bg-slate-50 p-10 text-center">
              <div className="text-6xl">🔎</div>

              <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
                No encontramos resultados
              </h3>

              <p className="mt-2 text-slate-600">
                Prueba con otro nombre, producto, servicio o categoría.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resultados.map((lugar) => (
                <article
                  key={lugar.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-emerald-700 to-emerald-400">
                    <span className="text-7xl">
                      {emojiCategoria(lugar.categoria)}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                      {lugar.categoria}
                    </span>

                    <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                      {lugar.nombre}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      📍 {lugar.ciudad}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {lugar.descripcion}
                    </p>

                    <Link
                      href={`/lugar/${lugar.id}`}
                      className="mt-5 block rounded-xl bg-emerald-600 px-5 py-3 text-center font-bold text-white hover:bg-emerald-700"
                    >
                      Ver información
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-emerald-900 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-6xl">🌄</div>

          <h2 className="mt-5 text-3xl font-extrabold">
            Descubre nuestra comunidad
          </h2>

          <p className="mt-5 text-lg leading-8 text-emerald-100">
            Conoce restaurantes, salud, comercio, educación,
            agricultura, deporte, cultura y eventos.
          </p>

          <p className="mt-4 font-bold text-emerald-200">
            {lugares.length} lugares registrados
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-10 text-center text-slate-400">
        <h3 className="font-extrabold text-white">
          🌄 Centro Poblado de Santa Cruz - Querecotillo
        </h3>

        <p className="mt-2">
          Directorio local de nuestra comunidad
        </p>

        <p className="mt-5 text-sm">
          © 2026 Centro Poblado de Santa Cruz - Querecotillo
        </p>
      </footer>
    </main>
  );
}
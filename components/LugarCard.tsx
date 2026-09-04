import type { Lugar } from "@/types";

type LugarCardProps = {
  lugar: Lugar;
  onClick?: () => void;
};

export default function LugarCard({
  lugar,
  onClick,
}: LugarCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        {lugar.imagen ? (
          <img
            src={lugar.imagen}
            alt={`Fachada de ${lugar.nombre}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-200">
            <span className="text-6xl">{lugar.categoria === "Restaurantes" ? "🍽️" : "📍"}</span>
          </div>
        )}

        {lugar.destacado && (
          <span className="absolute left-3 top-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-950 shadow">
            ⭐ Destacado
          </span>
        )}
      </div>

      {/* Información */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            {lugar.categoria}
          </span>

          <span className="text-sm text-slate-400">
            📍 {lugar.ciudad}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {lugar.nombre}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {lugar.descripcion}
        </p>

        {lugar.direccion && (
          <p className="mt-3 text-sm text-slate-500">
            📍 {lugar.direccion}
          </p>
        )}

        {/* Botón */}
        <button
          type="button"
onClick={(event) => {
  event.stopPropagation();
  window.location.href = `/lugar/${lugar.id}`;
}}
          className="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          Ver información
        </button>
      </div>
    </article>
  );
}
"use client";

type FiltrosProps = {
  ciudad: string;
  categoria: string;
  ciudades: string[];
  categorias: string[];
  onCiudadChange: (ciudad: string) => void;
  onCategoriaChange: (categoria: string) => void;
};

export default function Filtros({
  ciudad,
  categoria,
  ciudades,
  categorias,
  onCiudadChange,
  onCategoriaChange,
}: FiltrosProps) {
  return (
    <div className="grid w-full gap-3 sm:grid-cols-2">
      {/* Filtro por ciudad */}
      <div>
        <label
          htmlFor="filtro-ciudad"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          📍 Ciudad
        </label>

        <select
          id="filtro-ciudad"
          value={ciudad}
          onChange={(e) => onCiudadChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        >
          <option value="">Todas las ciudades</option>

          {ciudades.map((nombreCiudad) => (
            <option key={nombreCiudad} value={nombreCiudad}>
              {nombreCiudad}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro por categoría */}
      <div>
        <label
          htmlFor="filtro-categoria"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          🏷️ Categoría
        </label>

        <select
          id="filtro-categoria"
          value={categoria}
          onChange={(e) => onCategoriaChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        >
          <option value="">Todas las categorías</option>

          {categorias.map((nombreCategoria) => (
            <option key={nombreCategoria} value={nombreCategoria}>
              {nombreCategoria}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
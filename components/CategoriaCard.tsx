import { categorias, type Categoria } from "@/data/categoria";

type CategoriaCardProps = {
  categoria: Categoria;
  cantidad?: number;
  onClick?: () => void;
};

export default function CategoriaCard({
  categoria,
  cantidad = 0,
  onClick,
}: CategoriaCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full overflow-hidden rounded-2xl bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Encabezado de color */}
      <div
        className={`flex h-32 items-center justify-center bg-gradient-to-br ${categoria.color}`}
      >
        <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
          {categoria.emoji}
        </span>
      </div>

      {/* Información */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-900">
            {categoria.nombre}
          </h3>

          {cantidad > 0 && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              {cantidad}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {categoria.descripcion}
        </p>

        <div className="mt-4 font-semibold text-emerald-600 transition-colors group-hover:text-emerald-700">
          Explorar →
        </div>
      </div>
    </button>
  );
}
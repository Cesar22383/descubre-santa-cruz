export type Categoria = {
  id: number;
  nombre: string;
  descripcion: string;
  emoji: string;
  color: string;
};

export const categorias: Categoria[] = [
  {
    id: 1,
    nombre: "Restaurantes",
    descripcion: "Descubre dónde comer en Santa Cruz.",
    emoji: "🍽️",
    color: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    nombre: "Comercio",
    descripcion: "Encuentra tiendas y productos de la comunidad.",
    emoji: "🛍️",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 3,
    nombre: "Salud",
    descripcion: "Centros de salud y servicios médicos.",
    emoji: "🏥",
    color: "from-emerald-400 to-green-600",
  },
  {
    id: 4,
    nombre: "Educación",
    descripcion: "Instituciones y servicios educativos.",
    emoji: "🎓",
    color: "from-purple-400 to-violet-600",
  },
  {
    id: 5,
    nombre: "Agricultura",
    descripcion: "Productos y productores de nuestra comunidad.",
    emoji: "🌱",
    color: "from-lime-400 to-green-600",
  },
  {
    id: 6,
    nombre: "Deporte",
    descripcion: "Espacios y actividades deportivas.",
    emoji: "⚽",
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: 7,
    nombre: "Cultura",
    descripcion: "Arte, tradiciones y cultura local.",
    emoji: "🎭",
    color: "from-pink-400 to-purple-600",
  },
  {
    id: 8,
    nombre: "Eventos",
    descripcion: "Conoce los próximos eventos de Santa Cruz.",
    emoji: "📅",
    color: "from-yellow-400 to-orange-500",
  },
];
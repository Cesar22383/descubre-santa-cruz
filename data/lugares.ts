import type { Lugar } from "@/types";

export const lugares: Lugar[] = [
  {
    id: 1,
    nombre: "Restaurante Sabor Norteño",
    categoria: "Restaurantes",
    ciudad: "Santa Cruz",
    descripcion:
      "Comida norteña, platos criollos y especialidades de la casa.",
    imagen: "/images/restaurantes/sabor-norteno.jpg",
    direccion: "Centro poblado de Santa Cruz",
    telefono: "999 999 999",
    whatsapp: "999999999",
    horario: "Lunes a domingo: 8:00 a. m. - 10:00 p. m.",
    destacado: true,
    productos: [
      {
        id: 1,
        nombre: "Ceviche de pescado",
        descripcion: "Ceviche preparado al estilo de la casa.",
        precio: "S/ 18.00",
      },
      {
        id: 2,
        nombre: "Arroz con pato",
        descripcion: "Plato tradicional con arroz y pato.",
        precio: "S/ 22.00",
      },
      {
        id: 3,
        nombre: "Seco de cabrito",
        descripcion: "Preparación tradicional de la región.",
        precio: "S/ 25.00",
      },
    ],
  },

  {
    id: 2,
    nombre: "Clínica Salud Norte",
    categoria: "Salud",
    ciudad: "Santa Cruz",
    descripcion:
      "Atención médica y profesionales especializados.",
    imagen: "/images/salud/salud-norte.jpg",
    direccion: "Centro poblado de Santa Cruz",
    telefono: "999 888 777",
    horario: "Lunes a sábado: 8:00 a. m. - 6:00 p. m.",
    servicios: [
      "Medicina general",
      "Odontología",
      "Enfermería",
      "Laboratorio",
    ],
  },

  {
    id: 3,
    nombre: "Bodega Santa Cruz",
    categoria: "Comercio",
    ciudad: "Santa Cruz",
    descripcion:
      "Tienda local con productos de primera necesidad.",
    imagen: "/images/comercio/bodega-santa-cruz.jpg",
    direccion: "Centro poblado de Santa Cruz",
    telefono: "999 777 666",
    horario: "Lunes a domingo: 7:00 a. m. - 9:00 p. m.",
    productos: [
      {
        id: 1,
        nombre: "Abarrotes",
        descripcion: "Productos de primera necesidad.",
      },
      {
        id: 2,
        nombre: "Bebidas",
        descripcion: "Bebidas y refrescos.",
      },
      {
        id: 3,
        nombre: "Productos de limpieza",
        descripcion: "Artículos para el hogar.",
      },
    ],
  },

  {
    id: 4,
    nombre: "Institución Educativa Santa Cruz",
    categoria: "Educación",
    ciudad: "Santa Cruz",
    descripcion:
      "Institución educativa al servicio de los estudiantes de la comunidad.",
    imagen: "/images/educacion/ie-santa-cruz.jpg",
    direccion: "Santa Cruz",
    servicios: [
      "Educación primaria",
      "Educación secundaria",
      "Actividades culturales",
      "Actividades deportivas",
    ],
  },

  {
    id: 5,
    nombre: "Productores Agrícolas Santa Cruz",
    categoria: "Agricultura",
    ciudad: "Santa Cruz",
    descripcion:
      "Productores locales que ofrecen productos agrícolas de la zona.",
    imagen: "/images/agricultura/productores.jpg",
    direccion: "Santa Cruz",
    servicios: [
      "Venta de productos agrícolas",
      "Productos de temporada",
      "Venta directa del productor",
    ],
  },

  {
    id: 6,
    nombre: "Complejo Deportivo Santa Cruz",
    categoria: "Deporte",
    ciudad: "Santa Cruz",
    descripcion:
      "Espacio para actividades deportivas y recreativas.",
    imagen: "/images/deporte/complejo.jpg",
    direccion: "Santa Cruz",
    servicios: [
      "Fútbol",
      "Vóley",
      "Eventos deportivos",
      "Actividades recreativas",
    ],
  },

  {
    id: 7,
    nombre: "Casa de la Cultura Santa Cruz",
    categoria: "Cultura",
    ciudad: "Santa Cruz",
    descripcion:
      "Espacio dedicado a la cultura, arte y tradiciones de la comunidad.",
    imagen: "/images/cultura/casa-cultura.jpg",
    direccion: "Santa Cruz",
    servicios: [
      "Talleres culturales",
      "Exposiciones",
      "Actividades artísticas",
      "Eventos culturales",
    ],
  },

  {
    id: 8,
    nombre: "Fiesta Patronal de Santa Cruz",
    categoria: "Eventos",
    ciudad: "Santa Cruz",
    descripcion:
      "Celebración tradicional con actividades culturales, religiosas y sociales.",
    imagen: "/images/eventos/fiesta-patronal.jpg",
    direccion: "Centro poblado de Santa Cruz",
    servicios: [
      "Actividades culturales",
      "Actividades religiosas",
      "Presentaciones artísticas",
      "Gastronomía local",
    ],
  },
];
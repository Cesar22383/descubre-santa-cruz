export type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio?: string;
  imagen?: string;
};

export type Lugar = {
  id: number;
  nombre: string;
  categoria: string;
  ciudad: string;
  descripcion: string;
  emoji?: string;
  imagen?: string;
  direccion?: string;
  telefono?: string;
  whatsapp?: string;
  horario?: string;
  productos?: Producto[];
  servicios?: string[];
  destacado?: boolean;
};
// Tipos únicos para tod el SaaS

export type ISODate = string;
export type EstadoComercio = "activa" | "inactiva" | "mantenimiento";

export interface Comercio {
  id: string;
  nombre: string;
  categoria: CategoriaComercio;
  direccion: string;
  lat: number;
  lng: number;
  puntuacion: number; // 0 a 5
  telefono: string;
  propietario: string;
  estado: EstadoComercio;
  ventasHoy: number; 
  departamento?: string; // opcional, pero recomendado
}

// Para compatibilidad con componentes que esperan Pulperia
export type Pulperia = Comercio;

export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  imagen?: string;
  descripcion?: string;
  codigoBarras?: string;
}

export interface Venta {
  id: string;
  vendedor: string;
  producto: string;     // nombre del producto (UI-friendly)
  cantidad: number;
  pulperiaNombre: string;
  pulperiaId: string;   // FK -> Comercio.id
  hora: string;         // "09:20"
  total: number;        // C$
  precio: number;       // C$/unidad
  fechaISO?: ISODate;
}

export interface VentasResumen {
  ventasHoy: number;        // C$
  ventasMes: number;        // C$
  clientesNuevos: number;   // #
  promocionesActivas: number;
  productosVendidos: Array<{ nombre: string; cantidad: number; ventas: number }>;
  ventasPorCategoria: Array<{ categoria: string; ventas: number }>;
}

export type UserRole = "admin" | "vendedor" | "propietario";

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  role: UserRole;
  avatar?: string;
  telefono?: string;
  comercioId?: string; // si es propietario
  creadoEl: ISODate;
  ultimoAcceso: ISODate;
}

export type EstadoPedido = "pendiente" | "pagado" | "entregado" | "cancelado";

export interface Pedido {
  id: string;
  clienteId: string;
  clienteNombre: string;
  fecha: ISODate;
  total: number;
  estado: EstadoPedido;
  productos: Array<{
    productoId: string;
    nombre: string;
    cantidad: number;
    precio: number;
  }>;
}

// --- Clientes ---
export interface Cliente {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  fechaRegistro: ISODate; // ISO
  totalCompras: number;   // C$ acumulado
}


export type CategoriaComercio =
  | "pulperia"
  | "farmacia"
  | "distribuidora"
  | "panaderia"
  | "ferreteria";

export interface FiltrosComercio {
  departamento: string;
  categoria: "" | CategoriaComercio;
  puntuacionMinima: number;
  busqueda: string;
}

// src/types/reseña.ts
export interface Resena {
  id: string;
  autor: string;
  avatar: string;
  rating: number;
  comentario: string;
  fecha: Date;       // 👈 mejor manejarlo como Date directamente
  verificada: boolean;
}

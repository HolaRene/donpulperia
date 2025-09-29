// src/types/filtros.ts
import type { CategoriaComercio } from "@/types/tipado_comercio";

export interface Filtros {
  busqueda: string;
  departamento: "all" | string;
  categoria: "all" | CategoriaComercio;
  ratingMinimo: number;
}

export const departamentosNicaragua = [
  "Managua","León","Granada","Masaya","Chinandega",
  "Matagalpa","Jinotega","Estelí","Nueva Segovia","Madriz",
  "Boaco","Chontales","Río San Juan","Rivas","Carazo","RACCS","RACCN",
];

// Debe alinear con tu union CategoriaComercio
export const categorias = [
  "pulperia",
  "farmacia",
  "distribuidora",
  "panaderia",
  "ferreteria",
] as const;
import { Resena } from "@/types/tipado_comercio";

export const reseñasMock: Resena[] = [
  {
    id: "res-001",
    autor: "Carlos Mendoza",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    comentario: "Excelente servicio, productos frescos y atención rápida.",
    fecha: new Date("2024-11-15T10:30:00Z"),
    verificada: true,
  },
  {
    id: "res-002",
    autor: "Ana López",
    avatar: "https://i.pravatar.cc/150?img=25",
    rating: 4,
    comentario: "Buenos precios, aunque a veces falta inventario.",
    fecha: new Date("2024-11-20T14:10:00Z"),
    verificada: false,
  },
  {
    id: "res-003",
    autor: "José Ramírez",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 3,
    comentario: "La atención puede mejorar, pero cumplen con lo básico.",
    fecha: new Date("2024-12-01T09:45:00Z"),
    verificada: true,
  },
];

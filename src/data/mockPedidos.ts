import { Pedido } from "@/types/tipado_comercio";


export const pedidos: Pedido[] = [
  {
    id: "ped-1001",
    clienteId: "cli-001",
    clienteNombre: "Panadería San José",
    fecha: "2025-09-19T14:10:00Z",
    total: 4860,
    estado: "entregado",
    productos: [
      { productoId: "prod-harina-1kg", nombre: "Harina Primarina 1kg", cantidad: 50, precio: 48 },
      { productoId: "prod-levadura-100g", nombre: "Levadura Seca 100g", cantidad: 12, precio: 75 },
    ],
  },
  {
    id: "ped-1002",
    clienteId: "cli-003",
    clienteNombre: "Distribuidora El Lago",
    fecha: "2025-09-18T10:30:00Z",
    total: 3680,
    estado: "pagado",
    productos: [
      { productoId: "prod-grasa-1kg", nombre: "Grasa Panadera 1kg", cantidad: 20, precio: 92 },
      { productoId: "prod-azucar-1kg", nombre: "Azúcar Blanca 1kg", cantidad: 40, precio: 35 },
    ],
  },
  {
    id: "ped-1003",
    clienteId: "cli-002",
    clienteNombre: "Doña Marta Pulpería",
    fecha: "2025-09-20T09:00:00Z",
    total: 980,
    estado: "pendiente",
    productos: [
      { productoId: "prod-harina-1kg", nombre: "Harina Primarina 1kg", cantidad: 10, precio: 48 },
      { productoId: "prod-azucar-1kg", nombre: "Azúcar Blanca 1kg", cantidad: 8, precio: 35 },
    ],
  },
  {
    id: "ped-1004",
    clienteId: "cli-004",
    clienteNombre: "Mini Super El Carmen",
    fecha: "2025-09-20T11:45:00Z",
    total: 1110,
    estado: "pendiente",
    productos: [
      { productoId: "prod-levadura-100g", nombre: "Levadura Seca 100g", cantidad: 6, precio: 75 },
      { productoId: "prod-sal-1kg", nombre: "Sal Yodada 1kg", cantidad: 20, precio: 18 },
    ],
  },
  {
    id: "ped-1005",
    clienteId: "cli-005",
    clienteNombre: "Pulpería San Miguel",
    fecha: "2025-09-17T16:20:00Z",
    total: 736,
    estado: "cancelado",
    productos: [
      { productoId: "prod-grasa-1kg", nombre: "Grasa Panadera 1kg", cantidad: 8, precio: 92 },
    ],
  },
];

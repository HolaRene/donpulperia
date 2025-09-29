import { Usuario } from "@/types/tipado_comercio";

// ========== Usuarios ==========
export const usuarios = [
  {
    id: "usr-admin-001",
    nombre: "Admin General",
    email: "admin@tu-saas.com",
    role: "admin",
    avatar: "/avatars/admin.png",
    telefono: "+505 8888 0000",
    creadoEl: "2025-01-01T09:00:00Z",
    ultimoAcceso: "2025-09-20T18:10:00Z",
  },
  {
    id: "usr-prop-001",
    nombre: "Yolanda Solano",
    email: "yolanda@pulperia-esperanza.com",
    role: "propietario",
    telefono: "+505 8855 0101",
    comercioId: "com-teu-001",
    creadoEl: "2025-03-10T10:00:00Z",
    ultimoAcceso: "2025-09-20T08:40:00Z",
  },
  {
    id: "usr-prop-002",
    nombre: "Bismarck Sandoval",
    email: "bismarck@elbuenpan.com",
    role: "propietario",
    telefono: "+505 8855 0202",
    comercioId: "com-boa-002",
    creadoEl: "2025-04-02T10:00:00Z",
    ultimoAcceso: "2025-09-20T10:15:00Z",
  },
  {
    id: "usr-ven-001",
    nombre: "Carlos Pérez",
    email: "carlos@tu-saas.com",
    role: "vendedor",
    telefono: "+505 8844 2222",
    creadoEl: "2025-06-01T08:30:00Z",
    ultimoAcceso: "2025-09-20T09:30:00Z",
  },
  {
    id: "usr-ven-002",
    nombre: "Ana Herrera",
    email: "ana@tu-saas.com",
    role: "vendedor",
    telefono: "+505 8844 3333",
    creadoEl: "2025-06-20T09:10:00Z",
    ultimoAcceso: "2025-09-20T14:15:00Z",
  },
] satisfies Usuario[];
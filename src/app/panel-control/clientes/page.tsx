"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "./componentes/columns";
import { clientes } from "@/data/mockClientes";
import { DataTable } from "../inventario/components/data-table";


export default function ClientesPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-medium">Clientes</h1>
                <p className="mt-1 text-gray-600">Gestiona y revisa tus clientes</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Listado de Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Nuestro DataTable ya soporta filtro global, sorting y paginación */}
                    <DataTable columns={columns} data={clientes} filtro="nombre" />
                </CardContent>
            </Card>
        </div>
    );
}


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ShoppingCart, Receipt } from "lucide-react";
import { ventas } from "@/data/mockVentas";
import { DataTable } from "../inventario/components/data-table";
import { pedidos } from "@/data/mockPedidos";
import { ventasColumns } from "./components/ventas-columns";
import { pedidosColumns } from "./components/pedidos-columns";

export default function VentasPedidosPage() {
    return (
        <div className="space-y-6 mt-3">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-medium">Ventas & Pedidos</h1>
                <p className="mt-1 text-gray-600">Gestiona transacciones y órdenes del negocio</p>
            </div>

            <Tabs defaultValue="ventas" className="w-full">
                <TabsList>
                    <TabsTrigger value="ventas" className="gap-2">
                        <ShoppingCart className="h-4 w-4" /> Ventas
                    </TabsTrigger>
                    <TabsTrigger value="pedidos" className="gap-2">
                        <Receipt className="h-4 w-4" /> Pedidos
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="ventas" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Listado de Ventas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={ventasColumns} data={ventas} filtro="producto" />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="pedidos" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Listado de Pedidos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={pedidosColumns} data={pedidos} filtro="clienteNombre" />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

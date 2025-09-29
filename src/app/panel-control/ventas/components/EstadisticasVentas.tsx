"use client"

import { Card, CardContent } from "@/components/ui/card"
import { pedidos } from "@/data/mockPedidos";
import { Pedido } from "@/types/tipado_comercio";

import { CheckCircle, Clock, DollarSign, Package } from "lucide-react"
import { useState } from "react";

const EstadisticasVentas = () => {

    const [pedids, setPedidos] = useState<Pedido[]>(pedidos);


    const totalPedidos = pedids.length;
    const pedidosPendientes = pedids.filter(p => p.estado === 'pendiente').length;
    const pedidosEntregados = pedids.filter(p => p.estado === 'entregado').length;
    const ventasTotal = pedids.reduce((sum, p) => sum + p.total, 0);


    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-blue-600" />
                        <div>
                            <p className="text-sm text-gray-600">Total Pedidos</p>
                            <p className="text-xl font-bold">{totalPedidos}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-yellow-600" />
                        <div>
                            <p className="text-sm text-gray-600">Pendientes</p>
                            <p className="text-xl font-bold text-yellow-600">{pedidosPendientes}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <div>
                            <p className="text-sm text-gray-600">Entregados</p>
                            <p className="text-xl font-bold text-green-600">{pedidosEntregados}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-purple-600" />
                        <div>
                            <p className="text-sm text-gray-600">Ventas Total</p>
                            <p className="text-xl font-bold text-purple-600">C${ventasTotal.toFixed(2)}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default EstadisticasVentas
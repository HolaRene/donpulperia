"use client"

import { Card, CardContent } from "@/components/ui/card"
import { productos } from "@/data/mockProductos";
import { Producto } from "@/types/tipado_comercio";
import { AlertTriangle, Package } from "lucide-react"
import { useState } from "react";

const EstadisticasInventarios = () => {

    const [products] = useState<Producto[]>(productos);

    const totalValue = productos.reduce((sum, p) => sum + (p.precio * p.stock), 0);
    const lowStockProducts = productos.filter(p => p.stock < 10);
    const outOfStockProducts = productos.filter(p => p.stock === 0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-blue-600" />
                        <div>
                            <p className="text-sm text-gray-600">Valor Total</p>
                            <p className="text-xl font-bold">C${totalValue.toFixed(2)}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <div>
                            <p className="text-sm text-gray-600">Stock Bajo</p>
                            <p className="text-xl font-bold text-yellow-600">{lowStockProducts.length}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <div>
                            <p className="text-sm text-gray-600">Agotados</p>
                            <p className="text-xl font-bold text-red-600">{outOfStockProducts.length}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-green-600" />
                        <div>
                            <p className="text-sm text-gray-600">Total Items</p>
                            <p className="text-xl font-bold">{products.reduce((sum, p) => sum + p.stock, 0)}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default EstadisticasInventarios
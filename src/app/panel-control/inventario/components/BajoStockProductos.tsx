"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Producto } from "@/types/tipado_comercio";
import { productos } from "@/data/mockProductos";

const BajoStockProductos = () => {
    const [products] = useState<Producto[]>(productos);

    const lowStockProducts = products.filter(p => p.stock < 10);

    return (
        <div className=''>
            {lowStockProducts.length > 0 && (
                <Card className="border-yellow-200 bg-yellow-50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-yellow-800">
                            <AlertTriangle className="h-5 w-5" />
                            ¡Atención! Productos con Stock Bajo
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {lowStockProducts.slice(0, 5).map((producto) => (
                                <div key={producto.id} className="flex justify-between items-center p-2 bg-white rounded">
                                    <div>
                                        <p className="font-medium">{producto.nombre}</p>
                                        <p className="text-sm text-gray-500">{producto.categoria}</p>
                                    </div>
                                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                        {producto.stock} restantes
                                    </Badge>
                                </div>
                            ))}
                            {lowStockProducts.length > 5 && (
                                <p className="text-sm text-gray-500 text-center pt-2">
                                    Y {lowStockProducts.length - 5} productos más con stock bajo
                                </p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

export default BajoStockProductos
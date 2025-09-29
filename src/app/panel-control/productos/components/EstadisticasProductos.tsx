"use client"
import { Card, CardContent } from "@/components/ui/card"
import { productos } from "@/data/mockProductos";
import { Producto } from "@/types/tipado_comercio";
import { Package } from "lucide-react"
import { useState } from "react";

const EstadisticasProductos = () => {
    const [products] = useState<Producto[]>(productos);
    return (
        <div className=''>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-600">Total Productos</p>
                                <p className="text-xl font-bold">{productos.length}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-600">En Stock</p>
                                <p className="text-xl font-bold">{productos.filter(p => p.stock > 0).length}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-yellow-600" />
                            <div>
                                <p className="text-sm text-gray-600">Stock Bajo</p>
                                <span className="text-xl font-bold">{productos.filter(p => p.stock > 0 && p.stock < 10).length}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-red-600" />
                            <div>
                                <p className="text-sm text-gray-600">Agotados</p>
                                <p className="text-xl font-bold">{productos.filter(p => p.stock === 0).length}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default EstadisticasProductos
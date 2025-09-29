"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Badge } from "@/components/ui/badge"
import { Package } from "lucide-react";
import { ventasResumen } from "@/data/mockVentas";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const DetallesDashboard = () => {
    const { productosVendidos, ventasPorCategoria } = ventasResumen;
    return (
        <div className=''>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Productos vendidos */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Package className="h-5 w-5" />
                            Productos Más Vendidos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {productosVendidos.map((producto, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Badge variant="secondary">{index + 1}</Badge>
                                        <div>
                                            <p className="font-medium text-sm">{producto.nombre}</p>
                                            <p className="text-xs text-gray-500">{producto.cantidad} unidades</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-green-600">C${producto.ventas.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                {/* Gráfico de ventas por categoría */}
                <Card>
                    <CardHeader>
                        <CardTitle>Ventas por Categoría</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={ventasPorCategoria}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ categoria, percent }) => `${categoria} ${(percent as number * 100).toFixed(0)}%`}
                                    outerRadius={75}
                                    fill="#8884d8"
                                    dataKey="ventas"
                                >
                                    {ventasPorCategoria.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value: number) => [`C$${value.toFixed(2)}`, 'Ventas']} />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
            {/* Gráfico de barras - Ventas por categoría */}
            <Card>
                <CardHeader>
                    <CardTitle>Rendimiento por Categoría</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={ventasPorCategoria}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="categoria" />
                            <YAxis />
                            <Tooltip formatter={(value: number) => [`C$${value.toFixed(2)}`, 'Ventas']} />
                            <Bar dataKey="ventas" fill="#3b82f6" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default DetallesDashboard
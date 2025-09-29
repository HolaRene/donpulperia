"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react";
import { productos } from "@/data/mockProductos";

const HeaderProducts = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const categorias = Array.from(new Set(productos.map(p => p.categoria)));
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <div className="mt-2">
                    <h1 className="text-3xl font-bold ">Productos</h1>
                    <p className="text-gray-400 mt-1">Gestiona tu catálogo de productos</p>
                </div>
                <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Agregar Producto
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle>Agregar Nuevo Producto</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="nombre">Nombre del Producto</Label>
                                <Input id="nombre" placeholder="Ej: Arroz Mahatma 1lb" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="categoria">Categoría</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar categoría" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categorias.map(cat => (
                                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="precio">Precio</Label>
                                    <Input id="precio" type="number" placeholder="0.00" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="stock">Stock</Label>
                                    <Input id="stock" type="number" placeholder="0" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="codigo">Código de Barras</Label>
                                <Input id="codigo" placeholder="1234567890123" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="descripcion">Descripción</Label>
                                <Textarea id="descripcion" placeholder="Descripción del producto..." />
                            </div>
                            <div className="flex gap-2">
                                <Button onClick={() => setIsAddModalOpen(false)} className="flex-1">
                                    Agregar Producto
                                </Button>
                                <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                                    Cancelar
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default HeaderProducts
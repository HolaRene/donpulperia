"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { productos } from "@/data/mockProductos"
import { Producto } from "@/types/tipado_comercio"
import { Search } from "lucide-react"
import { useState } from "react"

const FiltroInventario = () => {
    const [products] = useState<Producto[]>(productos);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [showLowStock, setShowLowStock] = useState(false);

    const categorias = Array.from(new Set(productos.map(p => p.categoria)));


    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex gap-4 items-center">
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Buscar productos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-48">
                            <SelectValue placeholder="Todas las categorías" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas las categorías</SelectItem>
                            {categorias.map(cat => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="low-stock"
                            checked={showLowStock}
                            onCheckedChange={setShowLowStock}
                        />
                        <Label htmlFor="low-stock" className="text-sm font-medium">
                            Solo stock bajo
                        </Label>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default FiltroInventario
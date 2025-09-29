"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categorias, departamentosNicaragua, Filtros } from "@/types/filtro";
import { Search } from "lucide-react";

interface FiltrosComercioProps {
    filtros: Filtros;
    onFiltrosChange: (filtros: Filtros) => void;
}

export function FiltrosComercio({ filtros, onFiltrosChange }: FiltrosComercioProps) {
    return (
        <div className="border-b p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                {/* Búsqueda */}
                <div className="relative flex-1">
                    <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                    <Input
                        placeholder="Buscar comercios..."
                        value={filtros.busqueda}
                        onChange={(e) => onFiltrosChange({ ...filtros, busqueda: e.target.value })}
                        className="pl-10"
                    />
                </div>

                {/* Selectores */}
                <div className="flex flex-wrap gap-2 lg:flex-nowrap">
                    {/* Departamento */}
                    <Select
                        value={filtros.departamento === "" ? "all" : filtros.departamento}
                        onValueChange={(value) =>
                            onFiltrosChange({ ...filtros, departamento: value === "all" ? "all" : value })
                        }
                    >
                        <SelectTrigger className="w-full lg:w-40">
                            <SelectValue placeholder="Departamento" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todos</SelectItem>
                            {departamentosNicaragua.map((dept) => (
                                <SelectItem key={dept} value={dept}>
                                    {dept}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Categoría */}
                    <Select
                        value={filtros.categoria} // "all" | CategoriaComercio
                        onValueChange={(value) =>
                            onFiltrosChange({
                                ...filtros,
                                categoria: value as typeof filtros.categoria, // asegura el tipo
                            })
                        }
                    >
                        <SelectTrigger className="w-full lg:w-40">
                            <SelectValue placeholder="Categoría" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas</SelectItem>
                            {categorias.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Rating mínimo */}
                    <Select
                        value={String(filtros.ratingMinimo)}
                        onValueChange={(value) =>
                            onFiltrosChange({ ...filtros, ratingMinimo: parseFloat(value) })
                        }
                    >
                        <SelectTrigger className="w-full lg:w-32">
                            <SelectValue placeholder="Rating" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0">Cualquiera</SelectItem>
                            <SelectItem value="3">3+ ★</SelectItem>
                            <SelectItem value="4">4+ ★</SelectItem>
                            <SelectItem value="4.5">4.5+ ★</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}

"use client"

import { Producto } from "@/types/tipado_comercio"
import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Image from "next/image"
import { MoreHorizontal, ArrowUpDown, Eye } from "lucide-react"
import { DataTableColumnHeader } from "./data-table-column-header"
import Link from "next/link"

// Definimos las columnas para Producto
export const columns: ColumnDef<Producto>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "imagen",
        header: "Imagen",
        cell: ({ row }) => {
            const img = row.original.imagen
            return img ? (
                <Image
                    src={img}
                    alt={row.original.nombre}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                />
            ) : (
                <span className="text-gray-400">Sin imagen</span>
            )
        },
    },
    {
        accessorKey: "nombre",
        header: ({ column }) => {
            return (
                <Button variant={"ghost"} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Nombre
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "categoria",
        header: ({ column }) => (
            // Ocultar, ordenar orden Asc, Desc
            <DataTableColumnHeader column={column} title="Categoría" />
        ),
    },
    {
        accessorKey: "precio",
        header: "Precio (C$)",
        cell: ({ row }) => {
            return <span className="font-medium text-green-600">C${row.original.precio.toFixed(2)}</span>
        },
    },
    {
        accessorKey: "stock",
        header: "Stock",
        cell: ({ row }) => {
            const stock = row.original.stock

            const datos = row.original
            let color = "text-green-500"
            if (stock === 0) color = "text-red-500"
            else if (stock < 10) color = "text-yellow-600"

            return (<div className='flex gap-3 items-center'>
                <span className={`font-medium ${color}`}>{stock}</span>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(datos.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Eye /><Link href={'/productos/1'}>Ver Producto</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>)
        },
    },
]

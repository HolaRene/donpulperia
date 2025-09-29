"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, Eye, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import * as React from "react";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Cliente } from "@/types/tipado_comercio";

const currency = (n: number) => `C$${n.toFixed(2)}`;

export const columns: ColumnDef<Cliente>[] = [
    {
        accessorKey: "nombre",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="px-0">
                Nombre
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        filterFn: "includesString",
    },
    {
        accessorKey: "email",
        header: "Email",
        filterFn: "includesString",
        cell: ({ row }) => (
            <a href={`mailto:${row.original.email}`} className="underline-offset-2 hover:underline">
                {row.original.email}
            </a>
        ),
    },
    {
        accessorKey: "telefono",
        header: "Teléfono",
        cell: ({ row }) => <span className="whitespace-nowrap">{row.original.telefono}</span>,
    },
    {
        accessorKey: "fechaRegistro",
        header: "Registro",
        cell: ({ row }) => {
            const d = new Date(row.original.fechaRegistro);
            return <span className="whitespace-nowrap">{d.toLocaleDateString()}</span>;
        },
    },
    {
        accessorKey: "totalCompras",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="px-0">
                Total Compras
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => <span className="font-semibold text-green-600">{currency(row.original.totalCompras)}</span>,
    },
    {
        id: "acciones",
        header: "",
        cell: ({ row }) => <ClienteActions cliente={row.original} />,
        enableSorting: false,
        enableColumnFilter: false,
    },
];

function ClienteActions({ cliente }: { cliente: Cliente }) {
    const [open, setOpen] = React.useState(false);

    const desde = new Date(cliente.fechaRegistro);
    const dias = Math.floor((Date.now() - desde.getTime()) / (1000 * 60 * 60 * 24));

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setOpen(true)} className="gap-2">
                        <Eye className="h-4 w-4" /> Ver detalle
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>{cliente.nombre}</DialogTitle>
                        <DialogDescription>Información del cliente</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Email</span>
                            <a className="underline-offset-2 hover:underline" href={`mailto:${cliente.email}`}>
                                {cliente.email}
                            </a>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Teléfono</span>
                            <span>{cliente.telefono}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Registro</span>
                            <span>{new Date(cliente.fechaRegistro).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between border-t pt-2">
                            <span className="font-medium">Total Compras</span>
                            <span className="font-semibold text-green-600">{currency(cliente.totalCompras)}</span>
                        </div>
                        <div className="pt-1">
                            {dias <= 30 ? (
                                <Badge variant="secondary">Cliente nuevo (≤ 30 días)</Badge>
                            ) : (
                                <Badge variant="outline">Antigüedad: {dias} días</Badge>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

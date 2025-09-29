"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Eye, MoreHorizontal } from "lucide-react";
import * as React from "react";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { EstadoPedido, Pedido } from "@/types/tipado_comercio";

const currency = (n: number) => `C$${n.toFixed(2)}`;

const estadoVariant = (e: EstadoPedido): "secondary" | "default" | "destructive" | "outline" => {
    switch (e) {
        case "pendiente": return "outline";
        case "pagado": return "default";
        case "entregado": return "secondary";
        case "cancelado": return "destructive";
        default: return "default";
    }
};

export const pedidosColumns: ColumnDef<Pedido>[] = [
    { accessorKey: "id", header: "Pedido" },
    { accessorKey: "clienteNombre", header: "Cliente" },
    {
        accessorKey: "fecha",
        header: "Fecha",
        cell: ({ row }) => new Date(row.original.fecha).toLocaleString(),
    },
    {
        accessorKey: "estado",
        header: "Estado",
        cell: ({ row }) => (
            <Badge variant={estadoVariant(row.original.estado)} className="capitalize">
                {row.original.estado}
            </Badge>
        ),
    },
    {
        id: "items",
        header: "Ítems",
        cell: ({ row }) => row.original.productos.reduce((s, p) => s + p.cantidad, 0),
    },
    {
        accessorKey: "total",
        header: "Total",
        cell: ({ row }) => <span className="font-semibold text-green-600">{currency(row.original.total)}</span>,
    },
    {
        id: "acciones",
        header: "",
        cell: ({ row }) => <PedidoActions pedido={row.original} />,
        enableSorting: false,
        enableColumnFilter: false,
    },
];

function PedidoActions({ pedido }: { pedido: Pedido }) {
    const [open, setOpen] = React.useState(false);

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
                        <DialogTitle>Pedido #{pedido.id}</DialogTitle>
                        <DialogDescription>Resumen de la orden</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Cliente</span>
                            <span>{pedido.clienteNombre}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Fecha</span>
                            <span>{new Date(pedido.fecha).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Estado</span>
                            <span className="capitalize">{pedido.estado}</span>
                        </div>

                        <div className="mt-2 border-t pt-2">
                            <div className="mb-1 font-medium">Productos</div>
                            <div className="space-y-1">
                                {pedido.productos.map((p) => (
                                    <div key={p.productoId} className="flex justify-between">
                                        <span className="text-muted-foreground">{p.nombre} x{p.cantidad}</span>
                                        <span>{currency(p.precio * p.cantidad)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between border-t pt-2">
                            <span className="font-medium">Total</span>
                            <span className="font-semibold text-green-600">{currency(pedido.total)}</span>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

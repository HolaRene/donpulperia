"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Eye, MoreHorizontal } from "lucide-react";
import * as React from "react";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Venta } from "@/types/tipado_comercio";

const currency = (n: number) => `C$${n.toFixed(2)}`;

export const ventasColumns: ColumnDef<Venta>[] = [
    { accessorKey: "hora", header: "Hora" },
    { accessorKey: "pulperiaNombre", header: "Comercio" },
    {
        accessorKey: "producto",
        header: "Producto",
        cell: ({ row }) => (
            <div>
                <div className="font-medium">{row.original.producto}</div>
                <div className="text-xs text-muted-foreground">x{row.original.cantidad}</div>
            </div>
        ),
    },
    { accessorKey: "vendedor", header: "Vendedor" },
    {
        accessorKey: "total",
        header: "Total",
        cell: ({ row }) => <span className="font-semibold text-green-600">{currency(row.original.total)}</span>,
    },
    {
        id: "acciones",
        header: "",
        cell: ({ row }) => <VentaActions venta={row.original} />,
        enableSorting: false,
        enableColumnFilter: false,
    },
];

function VentaActions({ venta }: { venta: Venta }) {
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
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Venta #{venta.id}</DialogTitle>
                        <DialogDescription>Detalles de la transacción</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Hora</span>
                            <span>{venta.hora}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Comercio</span>
                            <span>{venta.pulperiaNombre}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Vendedor</span>
                            <span>{venta.vendedor}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Producto</span>
                            <span>{venta.producto} x{venta.cantidad}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Precio unit.</span>
                            <span>{currency(venta.precio)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                            <span className="font-medium">Total</span>
                            <span className="font-semibold text-green-600">{currency(venta.total)}</span>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

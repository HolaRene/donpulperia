"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CreditCard, Eye, MoreHorizontal } from "lucide-react";
import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export type Fiado = {
    id: string;
    clienteNombre: string;
    saldo: number;
    ultimaCompra: string;
    estado: string;
};

const currency = (n: number) => `C$${n.toFixed(2)}`;

export const fiadoColumns: ColumnDef<Fiado>[] = [
    { accessorKey: "clienteNombre", header: "Cliente" },
    {
        accessorKey: "saldo",
        header: "Saldo",
        cell: ({ row }) => (
            <span className="font-semibold text-red-600">{currency(row.original.saldo)}</span>
        ),
    },
    { accessorKey: "ultimaCompra", header: "Última Compra" },
    {
        accessorKey: "estado",
        header: "Estado",
        cell: ({ row }) => (
            <Badge
                variant={row.original.estado === "Pendiente" ? "destructive" : "secondary"}
                className="capitalize"
            >
                {row.original.estado}
            </Badge>
        ),
    },
    {
        id: "acciones",
        header: "",
        cell: ({ row }) => <FiadoActions fiado={row.original} />,
        enableSorting: false,
        enableColumnFilter: false,
    },
];

function FiadoActions({ fiado }: { fiado: Fiado }) {
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
                    <DropdownMenuItem onClick={() => setOpen(true)} className="gap-2">
                        <CreditCard className="h-4 w-4" /> Editar deuda
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Fiado #{fiado.id}</DialogTitle>
                        <DialogDescription>Detalles del cliente</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Cliente</span>
                            <span>{fiado.clienteNombre}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Última compra</span>
                            <span>{fiado.ultimaCompra}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Estado</span>
                            <span>{fiado.estado}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                            <span className="font-medium">Saldo pendiente</span>
                            <span className="font-semibold text-red-600">{currency(fiado.saldo)}</span>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

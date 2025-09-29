import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Store, User } from "lucide-react";
import { Venta } from "@/types/tipado_comercio";

interface VentasListProps {
    ventas: Venta[];
}

export function VentasList({ ventas }: VentasListProps) {
    return (
        <div className="h-full">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Ventas Recientes</h3>
                <Badge variant="secondary" className="px-3">
                    {ventas.length} transacciones
                </Badge>
            </div>

            <div className="max-h-[600px] space-y-3 overflow-y-auto pr-2">
                {ventas.map((venta) => {
                    const siglas =
                        venta.vendedor
                            .split(" ")
                            .map((n) => n[0]?.toUpperCase())
                            .join("")
                            .slice(0, 3) || "V";

                    return (
                        <Card key={venta.id} className="p-4 transition-shadow hover:shadow-md">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className="text-xs">{siglas}</AvatarFallback>
                                    </Avatar>

                                    <div className="min-w-0 flex-1">
                                        <div className="mb-1 flex items-center gap-2">
                                            <span className="font-medium ">
                                                {venta.producto}
                                            </span>
                                            <span className="text-sm text-gray-500">x{venta.cantidad}</span>
                                        </div>

                                        <div className="mb-1 flex items-center gap-1 text-xs text-gray-500">
                                            <Store className="h-3 w-3" />
                                            <span className="truncate">{venta.pulperiaNombre}</span>
                                        </div>

                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                <span>{venta.vendedor}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>{venta.hora}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="font-semibold ">
                                        C${venta.total.toFixed(2)}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        C${venta.precio.toFixed(2)} c/u
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}

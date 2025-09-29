import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ventasResumen } from "@/data/mockVentas"

import { DollarSign, Tag, TrendingUp, Users } from "lucide-react"

const ResumenVentas = () => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ventas de Hoy</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-green-600">C${ventasResumen.ventasHoy}</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">+12%</span> vs ayer
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ventas del Mes</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-blue-600">C${ventasResumen.ventasMes}</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">+8%</span> vs mes anterior
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Clientes Nuevos</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-purple-600">{ventasResumen.clientesNuevos}</div>
                    <p className="text-xs text-muted-foreground">Esta semana</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Promociones Activas</CardTitle>
                    <Tag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-orange-600">{ventasResumen.promocionesActivas}</div>
                    <p className="text-xs text-muted-foreground">En curso</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default ResumenVentas
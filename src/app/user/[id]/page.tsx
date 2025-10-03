'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const activityData = [
    { month: "Abr", sales: 1200 },
    { month: "May", sales: 2400 },
    { month: "Jun", sales: 1800 },
    { month: "Jul", sales: 2200 },
    { month: "Ago", sales: 2600 },
    { month: "Sep", sales: 3000 },
];

const chartConfig = {
    sales: {
        label: "Ventas",
        color: "var(--chart-1)",
    },
};

const metrics = [
    { label: "Ventas realizadas", value: 125 },
    { label: "Clientes atendidos", value: 48 },
    { label: "Fiados cobrados", value: 30 },
]

export default function PerfilUsuario() {
    return (
        <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1 flex flex-col gap-6">
                <Card>
                    <CardHeader className="items-center text-center">
                        <Avatar className="h-24 w-24 mb-4">
                            <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Juan Pérez" />
                            <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-2xl">Juan Pérez</CardTitle>
                        <Badge>Administrador</Badge>
                        <CardDescription>juanperez@email.com</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full">Editar Perfil</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Métricas Rápidas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {metrics.map(metric => (
                            <div key={metric.label} className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">{metric.label}</span>
                                <span className="font-semibold">{metric.value}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Actividad de Ventas</CardTitle>
                        <CardDescription>Ventas de los últimos 6 meses</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                            <LineChart
                                accessibilityLayer
                                data={activityData}
                                margin={{
                                    top: 5,
                                    right: 20,
                                    left: 10,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                />
                                <YAxis
                                    tickFormatter={(value) => `C$${value / 1000}k`}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" />}
                                />
                                <Line
                                    dataKey="sales"
                                    type="monotone"
                                    stroke="var(--color-sales)"
                                    strokeWidth={2}
                                    dot={{
                                        fill: "var(--color-sales)",
                                    }}
                                    activeDot={{
                                        r: 6,
                                    }}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

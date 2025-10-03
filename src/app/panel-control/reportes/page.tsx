'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const chartData = [
    { week: 'Semana 1', sales: 1200 },
    { week: 'Semana 2', sales: 2400 },
    { week: 'Semana 3', sales: 1800 },
    { week: 'Semana 4', sales: 2000 },
];

const chartConfig = {
    sales: {
        label: 'Ventas',
        color: 'var(--chart-1)',
    },
};

export default function Reportes() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle>Ventas del Mes</CardTitle>
                    <CardDescription>Total de ingresos en el mes actual.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">C$7,400.00</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Productos Vendidos</CardTitle>
                    <CardDescription>Cantidad total de productos vendidos.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">350</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Clientes Nuevos</CardTitle>
                    <CardDescription>Nuevos clientes registrados este mes.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">25</p>
                </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-3">
                <CardHeader>
                    <CardTitle>Ventas por Semana</CardTitle>
                    <CardDescription>Resumen de ventas semanales del último mes.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                        <BarChart accessibilityLayer data={chartData}>
                            <XAxis
                                dataKey="week"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                            />
                            <YAxis
                                tickFormatter={(value) => `C$${value / 1000}k`}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="sales" fill="var(--color-sales)" radius={8} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}

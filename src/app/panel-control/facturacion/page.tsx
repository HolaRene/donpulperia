import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const facturasData = [
    { id: 'FAC-001', cliente: 'Carlos Ruiz', monto: 230.00, estado: 'Pagada' },
    { id: 'FAC-002', cliente: 'Ana López', monto: 120.50, estado: 'Pendiente' },
    { id: 'FAC-003', cliente: 'Juan Pérez', monto: 85.00, estado: 'Pagada' },
    { id: 'FAC-004', cliente: 'Luis Garcia', monto: 310.00, estado: 'Anulada' },
];

export default function Facturacion() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Facturación</CardTitle>
                <CardDescription>
                    Historial de facturas emitidas a los clientes.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID Factura</TableHead>
                            <TableHead>Cliente</TableHead>
                            <TableHead>Monto</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Acción</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {facturasData.map((factura) => (
                            <TableRow key={factura.id}>
                                <TableCell className="font-medium">{factura.id}</TableCell>
                                <TableCell>{factura.cliente}</TableCell>
                                <TableCell>C${factura.monto.toFixed(2)}</TableCell>
                                <TableCell>
                                    <Badge variant={
                                        factura.estado === 'Pagada' ? 'default' :
                                            factura.estado === 'Pendiente' ? 'secondary' : 'destructive'
                                    }>
                                        {factura.estado}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm" className="gap-1">
                                        <Download className="h-3 w-3" />
                                        PDF
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

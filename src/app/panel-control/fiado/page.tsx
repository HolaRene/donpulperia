import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { DataTable } from '../inventario/components/data-table';
import { fiadoColumns } from './fiado-columns';

const fiadoData = [
    { id: '1', clienteNombre: 'Juan Pérez', saldo: 150.00, ultimaCompra: '12/09/2025', estado: 'Pendiente' },
    { id: '2', clienteNombre: 'María Rodriguez', saldo: 75.50, ultimaCompra: '10/09/2025', estado: 'Pagado parcial' },
    { id: '3', clienteNombre: 'Carlos López', saldo: 220.00, ultimaCompra: '11/09/2025', estado: 'Pendiente' },
    { id: '4', clienteNombre: 'Ana Martinez', saldo: 50.00, ultimaCompra: '08/09/2025', estado: 'Pendiente' },
];

export default function Fiado() {
    return (
        <Card className='mt-2'>
            <CardHeader>
                <CardTitle>Control de Fiado</CardTitle>
                <CardDescription>
                    Gestiona las deudas pendientes de tus clientes.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <DataTable columns={fiadoColumns} data={fiadoData} filtro='clienteNombre' />
            </CardContent>
        </Card>
    );
}

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export default function Configuracion() {
    return (
        <Card className="max-w-2xl mx-auto mt-2">
            <CardHeader>
                <CardTitle>Configuración</CardTitle>
                <CardDescription>
                    Ajusta los detalles de tu comercio y las preferencias del sistema.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre del Comercio</Label>
                    <Input id="nombre" defaultValue="Pulpería La Esquina" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="direccion">Dirección</Label>
                    <Input id="direccion" defaultValue="De la rotonda 2c. al sur, Managua" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="moneda">Moneda</Label>
                        <Select defaultValue="NIO">
                            <SelectTrigger id="moneda">
                                <SelectValue placeholder="Seleccionar moneda" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="NIO">Córdoba (NIO)</SelectItem>
                                <SelectItem value="USD">Dólar (USD)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="idioma">Idioma</Label>
                        <Select defaultValue="es">
                            <SelectTrigger id="idioma">
                                <SelectValue placeholder="Seleccionar idioma" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="es">Español</SelectItem>
                                <SelectItem value="en">Inglés</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="notificaciones">Notificaciones por Correo</Label>
                        <p className="text-sm text-muted-foreground">
                            Recibir resúmenes diarios y alertas importantes.
                        </p>
                    </div>
                    <Switch id="notificaciones" defaultChecked />
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
                <Button>Guardar Cambios</Button>
            </CardFooter>
        </Card>
    );
}

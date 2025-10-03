"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquarePlus } from "lucide-react";

// Datos de ejemplo
type ComercioEjemplo = {
    id: string,
    nombre: string,
    categoria: string,
    descripcion:
    string,
    logo: string,
    coverImage: string,
    puntuacion: number,
    totalReviews: number,
    direccion: string,
    municipio: string,
    departamento: string
    lat: number,
    lng: number,
    telefono: string,
    whatsapp: string
    horarioApertura: string,
    horarioCierre: string,
    diasLaborales: string[],
    propietario: string,
    fechaCreacion: string,
    activo: boolean,
};

export function EditarComercioDialog({ producto }: { producto: ComercioEjemplo }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(producto);

    const handleChange = (key: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        console.log("Datos actualizados:", formData);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2">
                    <MessageSquarePlus className="h-4 w-4" />
                    Editar Comercio
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Editar información del comercio</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Nombre */}
                    <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input
                            id="nombre"
                            value={formData.nombre}
                            onChange={(e) => handleChange("nombre", e.target.value)}
                        />
                    </div>

                    {/* Descripción */}
                    <div className="space-y-2">
                        <Label htmlFor="descripcion">Descripción</Label>
                        <Textarea
                            id="descripcion"
                            rows={3}
                            value={formData.descripcion}
                            onChange={(e) => handleChange("descripcion", e.target.value)}
                        />
                    </div>

                    {/* Dirección */}
                    <div className="space-y-2">
                        <Label htmlFor="direccion">Dirección</Label>
                        <Input
                            id="direccion"
                            value={formData.direccion}
                            onChange={(e) => handleChange("direccion", e.target.value)}
                        />
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input
                            id="telefono"
                            value={formData.telefono}
                            onChange={(e) => handleChange("telefono", e.target.value)}
                        />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp</Label>
                        <Input
                            id="whatsapp"
                            value={formData.whatsapp}
                            onChange={(e) => handleChange("whatsapp", e.target.value)}
                        />
                    </div>

                    {/* Horarios */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="horarioApertura">Horario Apertura</Label>
                            <Input
                                type="time"
                                id="horarioApertura"
                                value={formData.horarioApertura}
                                onChange={(e) => handleChange("horarioApertura", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="horarioCierre">Horario Cierre</Label>
                            <Input
                                type="time"
                                id="horarioCierre"
                                value={formData.horarioCierre}
                                onChange={(e) => handleChange("horarioCierre", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Propietario */}
                    <div className="space-y-2">
                        <Label htmlFor="propietario">Propietario</Label>
                        <Input
                            id="propietario"
                            value={formData.propietario}
                            onChange={(e) => handleChange("propietario", e.target.value)}
                        />
                    </div>

                    {/* Botones */}
                    <div className="flex justify-end gap-2 pt-4">
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Cancelar
                        </Button>
                        <Button onClick={handleSubmit}>Guardar Cambios</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

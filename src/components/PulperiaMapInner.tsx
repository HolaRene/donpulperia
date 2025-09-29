"use client"

import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, User } from "lucide-react";

import { EstadoComercio, Pulperia } from "@/types/tipado_comercio";

// Icono Leaflet por defecto
const icon = L.icon({
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface PulperiaMapProps {
    pulperias: Pulperia[];
}

// Mapeo a variantes de shadcn Badge
const getStatusVariant = (
    estado: EstadoComercio
): "default" | "secondary" | "destructive" => {
    switch (estado) {
        case "activa":
            return "default";
        case "mantenimiento":
            return "secondary";
        case "inactiva":
        default:
            return "destructive";
    }
};

const getStatusText = (estado: EstadoComercio) => {
    switch (estado) {
        case "activa":
            return "Activa";
        case "inactiva":
            return "Inactiva";
        case "mantenimiento":
            return "Mantenimiento";
        default:
            return estado;
    }
};

export function PulperiaMap({ pulperias }: PulperiaMapProps) {
    const mapRef = useRef<L.Map | null>(null);

    return (
        <div className="h-full w-full rounded-lg overflow-hidden border">
            <MapContainer
                center={[12.414447995440048, -85.74348097344499]}
                zoom={11}
                className="h-full w-full leaflet-container"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {pulperias.map((p) => (
                    <Marker key={p.id} position={[p.lat, p.lng]} icon={icon}>
                        <Popup className="max-w-xs">
                            <div className="p-2">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        {p.nombre}
                                    </h3>
                                    <Badge variant={getStatusVariant(p.estado)} className="text-xs">
                                        {getStatusText(p.estado)}
                                    </Badge>
                                </div>

                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3 shrink-0" />
                                        <span className="text-xs">{p.direccion}</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <Phone className="h-3 w-3 shrink-0" />
                                        <span className="text-xs">{p.telefono}</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <User className="h-3 w-3 shrink-0" />
                                        <span className="text-xs">{p.propietario}</span>
                                    </div>

                                    <div className="border-t pt-2">
                                        <div className="text-xs font-medium text-green-600">
                                            Ventas hoy: C${p.ventasHoy.toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

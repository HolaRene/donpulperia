"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { Comercio } from "@/types/tipado_comercio";

// Si ya tienes un mapa de colores por categoría, impórtalo.
// Si no, define uno aquí (valores por defecto):
const coloresCategoria: Record<Comercio["categoria"], string> = {
    pulperia: "#3b82f6",
    farmacia: "#10b981",
    distribuidora: "#f59e0b",
    panaderia: "#ef4444",
    ferreteria: "#8b5cf6",
};

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface MapComponentProps {
    comercios: Comercio[];
    selectedComercio?: Comercio;
    onComercioSelect: (comercio: Comercio) => void;
}

export function MapComponent({
    comercios,
    selectedComercio,
    onComercioSelect,
}: MapComponentProps) {
    const mapRef = useRef<L.Map | null>(null);

    // Icono custom por categoría + resaltado si está seleccionado
    const createCustomIcon = (categoria: Comercio["categoria"], isSelected = false) => {
        const color = coloresCategoria[categoria] ?? "#64748b";
        return L.divIcon({
            html: `
        <div style="
          background-color:${color};
          width:24px;height:24px;border-radius:50%;
          border:3px solid white; box-shadow:0 2px 4px rgba(0,0,0,.2);
          ${isSelected ? "transform:scale(1.3); z-index:1000;" : ""}
        "></div>`,
            className: "custom-marker",
            iconSize: [24, 24],
            iconAnchor: [12, 12],
        });
    };

    useEffect(() => {
        if (selectedComercio && mapRef.current) {
            mapRef.current.setView([selectedComercio.lat, selectedComercio.lng], 15);
        }
    }, [selectedComercio]);

    const center: [number, number] = [12.1364, -86.2514]; // Managua

    return (
        <div className="h-full w-full z-0 rounded-lg overflow-hidden border">
            <MapContainer
                center={center}
                zoom={8}
                className="h-full w-full"
                ref={mapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='flexis'
                />

                {comercios.map((c) => (
                    <Marker
                        key={c.id}
                        position={[c.lat, c.lng]}
                        icon={createCustomIcon(c.categoria, selectedComercio?.id === c.id)}
                        eventHandlers={{ click: () => onComercioSelect(c) }}
                    >
                        <Popup>
                            <div className="p-2 text-center">
                                {/* usa next/image si quieres optimizar y conoces dominio */}
                                {/* <img
                                    src={c.logo}
                                    alt={c.nombre}
                                    className="mx-auto mb-2 h-16 w-16 rounded-lg object-cover"
                                /> */}
                                <h3 className="text-sm font-semibold">{c.nombre}</h3>
                                <p className="text-xs text-gray-600 capitalize">{c.categoria}</p>
                                <div className="mt-1 flex items-center justify-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-xs">
                                        {c.puntuacion} (100 reviews)
                                    </span>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

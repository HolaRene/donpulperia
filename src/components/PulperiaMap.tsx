// src/components/PulperiaMap.tsx
"use client";

import dynamic from "next/dynamic";
import type { Pulperia } from "@/types/tipado_comercio";

const PulperiaMapInner = dynamic(
    () => import("./PulperiaMapInner").then((m) => m.PulperiaMap), // 👈 coincide con tu export real
    {
        ssr: false,
        loading: () => (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                Cargando mapa…
            </div>
        ),
    }
);

export function PulperiaMap(props: { pulperias: Pulperia[] }) {
    return <PulperiaMapInner {...props} />;
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import type { Comercio } from "@/types/tipado_comercio";
import { comercios } from "@/data/mockComercio";
import { Filtros } from "@/types/filtro";
import { FiltrosComercio } from "./FiltrosComercio";
import { ComercioCard } from "./ComercioCard";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const SafeMap = dynamic(() => import("./MapComponent").then(m => m.MapComponent), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center text-sm ">
            Cargando mapa…
        </div>
    ),
});

const ContentMain = () => {
    const router = useRouter();

    const [comerce] = useState<Comercio[]>(comercios);
    const [selectedComercio, setSelectedComercio] = useState<Comercio | undefined>();
    const [filtros, setFiltros] = useState<Filtros>({
        busqueda: "",
        departamento: "all",
        categoria: "all",
        ratingMinimo: 0,
    });

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const comerciosFiltrados = useMemo(() => {
        const q = filtros.busqueda.trim().toLowerCase();



        return comerce.filter((c) => {
            const matchBusqueda =
                q === "" ||
                c.nombre.toLowerCase().includes(q) ||
                c.categoria.toLowerCase().includes(q);

            const matchDepartamento =
                filtros.departamento === "all" || c.departamento === filtros.departamento;

            const matchCategoria =
                filtros.categoria === "all" || c.categoria === filtros.categoria;

            const rating = c.puntuacion ?? 0;
            const matchRating = rating >= filtros.ratingMinimo;

            return matchBusqueda && matchDepartamento && matchCategoria && matchRating;
        });
    }, [comerce, filtros]);

    const handleComercioSelect = (comercio: Comercio) => {
        setSelectedComercio(comercio);
    };

    const handleComercioClick = (comercio: Comercio) => {
        router.push(`/comercio/${comercio.id}`);
    };

    return (
        <div className="flex flex-col">
            {/* Filtros arriba */}
            <FiltrosComercio filtros={filtros} onFiltrosChange={setFiltros} />


            {/* Mapa y Lista de Ventas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="lg:col-span-1">
                    <ScrollArea className="h-[500px] w-full rounded-md border p-4 mt-1">
                        <Card className="p-6">
                            <div className="space-y-2">
                                {comerciosFiltrados.map((comercio) => (
                                    <ComercioCard
                                        key={comercio.id}
                                        comercio={comercio}
                                        onClick={() => handleComercioClick(comercio)}
                                        isSelected={selectedComercio?.id === comercio.id}
                                    />
                                ))}

                                {comerciosFiltrados.length === 0 && (
                                    <div className="py-12 text-center">
                                        <div className="mb-2 text-lg text-gray-500">No se encontraron comercios</div>
                                        <p className="text-gray-400">Intenta ajustar los filtros de búsqueda</p>
                                    </div>
                                )}
                            </div>
                        </Card>
                    </ScrollArea>
                </div>

                <div className="lg:col-span-1">
                    <Card className="p-6 h-[500px] mt-1">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">
                                {comerciosFiltrados.length} comercios encontrados
                            </h2>
                        </div>
                        <div className="h-[500px] w-full">
                            {mounted && (
                                <>
                                    {comerciosFiltrados.length === 0 ? (
                                        <div className="h-full w-full  text-center">
                                            <p className="text-gray-400">Intenta ajustar los filtros de búsqueda</p>
                                        </div>
                                    ) : (
                                        <SafeMap
                                            comercios={comerciosFiltrados}
                                            selectedComercio={selectedComercio}
                                            onComercioSelect={handleComercioSelect}
                                        />
                                    )}
                                </>
                            )}
                        </div>

                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContentMain;

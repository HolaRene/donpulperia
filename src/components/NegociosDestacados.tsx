"use client"

import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight } from "lucide-react"
import { Comercio } from "@/lib/tipado_comercio"


interface ComercioConCategoria extends Comercio {
    category: string
}

interface Props {
    businesses: ComercioConCategoria[]
}

export function NegociosDestacados({ businesses }: Props) {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-12">Comercios Destacados</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {businesses.map((comercio) => (
                        <Card
                            key={comercio.id}
                            className="overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* Imagen */}
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={"/images/pulperias/dona-marta-1.png"}
                                    alt={comercio.nombre}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Header */}
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg">{comercio.nombre}</CardTitle>
                                        <CardDescription className="flex items-center gap-1 mt-1">
                                            <MapPin className="h-4 w-4" />
                                            {comercio.ubicacion.direccion}
                                        </CardDescription>
                                        <CardDescription className="text-xs mt-1">
                                            {comercio.ubicacion.municipio},{" "}
                                            {comercio.ubicacion.departamento}
                                        </CardDescription>
                                    </div>
                                    <Badge variant="secondary">{comercio.category}</Badge>
                                </div>
                            </CardHeader>

                            {/* Content */}
                            <CardContent>
                                <div className="flex justify-between items-center">
                                    {/* Estrellas */}
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Botón */}
                                    <Button variant="ghost" size="sm" className="group">
                                        Ver detalles
                                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

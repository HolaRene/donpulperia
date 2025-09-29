"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ArrowLeft,
    Star,
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
    Verified,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ReseñaDialog } from "./components/ResenaDialog";
import ProductCard from "./components/ProductCard";
import { productos } from "@/data/mockProductos";
import ResenaCard from "./components/ResenaCard";
import { reseñasMock } from "@/data/resenas";

// Datos de ejemplo
const comercioEjemplo = {
    id: "com-teu-001",
    nombre: "Pulpería La Esperanza",
    categoria: "pulperia",
    descripcion: "La mejor pulpería del barrio con productos frescos y atención rápida.",
    logo: "/placeholder.png",
    coverImage: "/placeholder.png",
    puntuacion: 4.5,
    totalReviews: 12,
    direccion: "Barrio Central, Teustepe, Boaco",
    municipio: "Teustepe",
    departamento: "Boaco",
    lat: 12.3723,
    lng: -85.6594,
    telefono: "+505 8855 0101",
    whatsapp: "50588550101",
    horarioApertura: "08:00",
    horarioCierre: "18:00",
    diasLaborales: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    propietario: "Yolanda Solano",
    fechaCreacion: "2023-01-01",
    activo: true,
};

const PerfilComercio = () => {
    const router = useRouter();
    const comercio = productos

    const rese = reseñasMock

    const [activeTab, setActiveTab] = useState("productos");

    if (!comercio) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Comercio no encontrado</h2>
                    <Button onClick={() => router.push("/")}>Volver al listado</Button>
                </div>
            </div>
        );
    }

    const handleNewReseña = (rating: number, comentario: string) => {
        console.log('Nueva reseña:', { rating, comentario });
        // Aquí se integraría con la API para guardar la reseña
    };

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${comercioEjemplo.whatsapp}`, "_blank");
    };

    return (
        <div className="min-h-screen ">
            {/* Header con botón de regreso */}
            <header className=" shadow-sm p-4 mt-2">
                <div className="max-w-7xl mx-auto flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => router.push("/comercio")}
                        className="gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver
                    </Button>
                    <h1 className="font-semibold">Perfil del comercio</h1>
                </div>
            </header>

            {/* Cover Image y Logo */}
            <div className="relative">
                <div className="h-48 md:h-64 w-full">
                    <Image
                        src={comercioEjemplo.coverImage}
                        alt={`Cover de ${comercioEjemplo.nombre}`}
                        className="w-full h-full object-cover"
                        height={256}
                        width={1024}
                    />
                </div>

                <div className="absolute -bottom-12 left-6 md:left-12">
                    <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                        <AvatarImage src={comercioEjemplo.logo} alt={comercioEjemplo.nombre} />
                        <AvatarFallback className="text-2xl">
                            {comercioEjemplo.nombre.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </div>
            </div>

            {/* Información principal */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-2xl md:text-3xl font-bold">
                                    {comercioEjemplo.nombre}
                                </h1>
                                <Verified className="h-6 w-6 text-blue-500" />
                            </div>

                            <Badge variant="secondary" className="mb-4">
                                {comercioEjemplo.categoria}
                            </Badge>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold">{comercioEjemplo.puntuacion}</span>
                                    <span className="text-muted-foreground">
                                        ({comercioEjemplo.totalReviews} reseñas)
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {comercioEjemplo.descripcion}
                            </p>

                            {/* Información de contacto */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{comercioEjemplo.direccion}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{comercioEjemplo.telefono}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">contacto@correo.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">
                                        Lun-Vie: {comercioEjemplo.horarioApertura} - {comercioEjemplo.horarioCierre}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col gap-3 lg:min-w-48">
                            <Button
                                onClick={handleWhatsAppClick}
                                className="bg-green-600 hover:bg-green-700 gap-2"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Contactar por WhatsApp
                            </Button>
                            <ReseñaDialog onSubmit={handleNewReseña} />
                        </div>
                    </div>
                </motion.div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
                    <TabsList className="grid w-full grid-cols-3 lg:w-96">
                        <TabsTrigger value="productos">Productos</TabsTrigger>
                        <TabsTrigger value="reseñas">Reseñas</TabsTrigger>
                        <TabsTrigger value="publicaciones">Publicaciones</TabsTrigger>
                    </TabsList>

                    <TabsContent value="productos" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {comercio.map((producto) => (
                                <ProductCard key={producto.id} producto={producto} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="reseñas" className="mt-6">
                        <div className="space-y-4">
                            {
                                rese.sort(
                                    (a, b) =>
                                        new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
                                )
                                    .map((reseña) => (
                                        <ResenaCard key={reseña.id} resenas={reseña} />
                                    ))}
                        </div>
                    </TabsContent>
                    {/* <TabsContent value="publicaciones" className="mt-6"> ... </TabsContent> */}
                </Tabs>
            </div>
        </div>
    );
}
export default PerfilComercio;
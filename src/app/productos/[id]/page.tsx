"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Receipt, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ProductoDetalle() {
    const handleWhatsAppChat = () => {
        window.open('https://wa.me/50588888888', '_blank');
    };

    return (
        <div className="flex justify-center items-start p-2 md:p-8">
            <Card className="w-full max-w-4xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-0">
                        <Image
                            src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg"
                            alt="Pan Dulce Tradicional"
                            width={600}
                            height={400}
                            className="object-cover w-full h-64 md:h-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">Panadería</Badge>
                            <CardTitle className="text-3xl">Pan Dulce Tradicional</CardTitle>
                            <CardDescription className="text-lg text-primary font-bold">C$25.00</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Pan artesanal fresco, horneado diariamente. Perfecto para acompañar con una taza de café por la mañana.
                            </p>
                            <div>
                                <span className="font-semibold">Disponibilidad:</span>
                                <Badge variant="default" className="ml-2 bg-green-600">Disponible</Badge>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col items-start gap-4 mt-auto">
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <Button>
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Agregar al carrito
                                </Button>
                                <Button variant="outline">
                                    <Receipt className="mr-2 h-4 w-4" />
                                    Hacer pedido
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <Button variant="ghost" className="text-muted-foreground">
                                    <Heart className="mr-2 h-4 w-4" />
                                    Guardar
                                </Button>
                                <Button
                                    onClick={handleWhatsAppChat}
                                    className="bg-green-500 hover:bg-green-600 text-white"
                                >
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    Chatear por WhatsApp
                                </Button>
                            </div>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </div>
    );
}

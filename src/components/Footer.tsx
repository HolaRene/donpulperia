"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
    return (
        <Card className="mt-16 border-0 border-t-1 border-gray-400 shadow-none bg-background text-muted-foreground">
            <CardContent className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start p-8">

                {/* Logo + info */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/donjoe.jpg"
                            alt="Logo"
                            width={36}
                            height={36}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                        />
                        <span className="hidden md:block text-lg font-semibold tracking-wide text-foreground">
                            DonPulpería
                        </span>
                    </Link>
                    <p className="text-xs">2025 donJoeComercio</p>
                    <p className="text-xs">Todos los derechos reservados en el baúl de los recuerdos</p>
                </div>

                <Separator orientation="vertical" className="hidden md:block h-28" />

                {/* Columnas de enlaces */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-sm">
                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-foreground">Enlaces</p>
                        <Link href="/" className="hover:text-foreground">Inicio</Link>
                        <Link href="/products" className="hover:text-foreground">Términos y servicios</Link>
                        <Link href="/about" className="hover:text-foreground">Políticas de privacidad</Link>
                        <Link href="/contact" className="hover:text-foreground">Contacto</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-foreground">Productos</p>
                        <Link href="/" className="hover:text-foreground">Todos los productos</Link>
                        <Link href="/products" className="hover:text-foreground">Nuevos</Link>
                        <Link href="/about" className="hover:text-foreground">Más vendidos</Link>
                        <Link href="/contact" className="hover:text-foreground">Ventas</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-foreground">Nosotros</p>
                        <Link href="/" className="hover:text-foreground">Sobre nosotros</Link>
                        <Link href="/products" className="hover:text-foreground">Contáctanos</Link>
                        <Link href="/about" className="hover:text-foreground">Blog</Link>
                        <Link href="/contact" className="hover:text-foreground">Programa de afiliados</Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Footer

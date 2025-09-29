"use client"

import {
    ShoppingBasket,
    Beer,
    Coffee,
    Candy,
    Droplet,
    Utensils,
    Milk,
    Package,
    Store,
    Truck,
    Shirt,
} from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


const categories = [
    { name: "Todos", icon: ShoppingBasket, slug: "all" },

    // Productos
    { name: "Bebidas", icon: Beer, slug: "bebidas" },
    { name: "Café y derivados", icon: Coffee, slug: "cafe" },
    { name: "Dulces", icon: Candy, slug: "dulces" },
    { name: "Agua", icon: Droplet, slug: "agua" },
    { name: "Enlatados", icon: Package, slug: "enlatados" },
    { name: "Lácteos", icon: Milk, slug: "lacteos" },
    { name: "Comida rápida", icon: Utensils, slug: "comida" },
    { name: "Ropas", icon: Shirt, slug: "ropas" },

    // Filtrar por negocio
    { name: "Pulperías", icon: Store, slug: "pulperias" },
    { name: "Distribuidoras", icon: Truck, slug: "distribuidoras" },
]



const Categorias = () => {
    const searchParams = useSearchParams()
    const seleccionCategoria = searchParams.get("categoria")
    console.log(seleccionCategoria)
    const router = useRouter()
    const pathName = usePathname()

    const manejoCambios = (categoria: string | null) => {
        const parametro = new URLSearchParams(searchParams)
        parametro.set("categoria", categoria || "all")
        router.push(`${pathName}?${parametro.toString()}`, { scroll: false })
    }

    return (
        <Card className="p-3 mb-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 text-sm">
                {categories.map((category) => {
                    const Icon = category.icon
                    const active =
                        seleccionCategoria === category.slug ||
                        (!seleccionCategoria && category.slug === "all")

                    return (
                        <Badge
                            key={category.slug}
                            variant={active ? "default" : "outline"}
                            className={cn(
                                "flex items-center gap-2 px-2 py-1 cursor-pointer justify-center transition",
                                active && "bg-primary text-primary-foreground"
                            )}
                            onClick={() => manejoCambios(category.slug)}
                        >
                            <Icon className="w-4 h-4" />
                            {category.name}
                        </Badge>

                    )
                })}
            </div>
        </Card>
    )
}

export default Categorias

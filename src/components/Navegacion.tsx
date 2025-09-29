"use client"
import Link from "next/link"
import { LogOut, Moon, Settings, Sun, User } from 'lucide-react';

// Componentes de shadcn
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger, } from "./ui/sidebar";
import { isAuthenticated } from "./AppSideBar";



const Navegacion = () => {

    const { setTheme } = useTheme()
    // const { toggleSidebar } = useSidebar()

    return (
        <nav className='p-4 flex items-center justify-between sticky top-0 z-10 bg-background border-b-1 border-gray-500'>
            {/* lado izquierdo */}
            {/* Icono que colapsa el sidebar */}
            <SidebarTrigger />
            {/* <Button variant={"outline"} onClick={toggleSidebar}>Personalizar</Button> */}
            {/* lado derecho */}
            <div className="flex items-center gap-4">
                <Link href={'/'}>Tablero</Link>
                <Link href={'/comercio'}>Comercio</Link>




                {/* Escojer un tema */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Cambiar de modo</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Claro
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Oscuro
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            Sistema
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {/* Componente de un dropdown para el usuario */}
                {isAuthenticated ? <DropdownMenu>
                    <DropdownMenuTrigger>
                        {/* Componente de un avatar */}
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/176935470?s=96&v=4" />
                            <AvatarFallback>user</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><User className="h-[1.2rem] w-[1.2rem] mr-2" />Usuario</DropdownMenuItem>
                        <DropdownMenuItem><Settings className="h-[1.2rem] w-[1.2rem] mr-2" />Ajuste</DropdownMenuItem>
                        <DropdownMenuItem variant="destructive"><LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />Salir</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu> : <Button>Iniciar Sesión</Button>}

            </div>
        </nav>
    )
}

export default Navegacion
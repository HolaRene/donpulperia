import {
    Home,
    Package,
    ShoppingCart,
    Users,
    BarChart,
    Settings,
    LogOut,
    ChevronUp,
    User2,
    Wallet,
    Receipt,
    Info, LogIn, UserPlus, Phone,
    PackageOpen
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "./ui/sidebar";

import Link from "next/link";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const publicMenuItems = [
    {
        title: "Inicio",
        url: "/",
        icon: Home,
    },
    {
        title: "Sobre DonPulpería",
        url: "/about",
        icon: Info,
    },
    {
        title: "Iniciar Sesión",
        url: "/login",
        icon: LogIn,
    },
    {
        title: "Registrarse",
        url: "/register",
        icon: UserPlus,
    },
    {
        title: "Contacto",
        url: "/contact",
        icon: Phone,
    },
];

export const isAuthenticated = true;


const menuItems = [
    {
        title: "Panel de control",
        url: "/panel-control",
        icon: Home,
    },
    {
        title: "Inventario",
        url: "/panel-control/inventario",
        icon: Package,
    },
    {
        title: "Productos",
        url: "/panel-control/productos",
        icon: PackageOpen,
    },
    {
        title: "Ventas/Pedidos",
        url: "/panel-control/ventas",
        icon: ShoppingCart,
    },
    {
        title: "Fiado",
        url: "/panel-control/fiado",
        icon: Wallet,
    },
    {
        title: "Clientes",
        url: "/panel-control/clientes",
        icon: Users,
    },
    {
        title: "Reportes",
        url: "/panel-control/reportes",
        icon: BarChart,
    },
    {
        title: "Facturación",
        url: "/panel-control/facturacion",
        icon: Receipt,
    },
    {
        title: "Configuración",
        url: "/panel-control/configuracion",
        icon: Settings,
    },
];

const AppSideBar = () => {

    const menuItemsToShow = isAuthenticated ? menuItems : publicMenuItems;

    return (
        <Sidebar collapsible="icon">
            {/* HEADER */}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={"/"}>
                                <Image
                                    alt="logo"
                                    src={"/donjoe.jpg"}
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                                <span className="font-semibold">donPulpería</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarSeparator />

            {/* CONTENT */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menú principal</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItemsToShow.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            {item.title}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarSeparator />

            {/* FOOTER */}
            {isAuthenticated && (
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton>
                                        <User2 /> donJoe{" "}
                                        <ChevronUp className="ml-auto opacity-70" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <User2 className="mr-2 h-4 w-4" />
                                        Cuenta
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        Ajustes
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-500">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Cerrar sesión
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            )}
        </Sidebar>
    );
};

export default AppSideBar;

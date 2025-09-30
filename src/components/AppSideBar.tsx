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
    PackageOpen,
    Layers,
    Map,
    StoreIcon,
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
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
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
        title: "Sobre DonPulpería",
        url: "/about",
        icon: Info,
        subItems: [
            {
                title: "Planes",
                url: "/pricing",
                icon: Package,
            },
            {
                title: "Funcionalidades",
                url: "/features",
                icon: Layers,
            },
            {
                title: "Mapa de Comercios",
                url: "/map",
                icon: Map,
            },
            {
                title: "Contacto",
                url: "/contact",
                icon: Phone,
            },
        ]
    },
];


export const isAuthenticated = true;


const menuItems = [
    {
        title: "Tienda",
        url: "/panel-control/tienda",
        icon: StoreIcon,
    },
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


    const sinAutenticarTiendaItems = publicMenuItems[0].subItems

    return (
        <Sidebar collapsible="icon">
            {/* HEADER */}
            <SidebarHeader className="mb-5">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={"/"}>
                                <Image
                                    alt="logo"
                                    src={"/donjoe.jpg"}
                                    width={40}
                                    height={40}
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
                    <SidebarGroupLabel>Menú</SidebarGroupLabel>
                    {isAuthenticated ? (<SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
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
                    </SidebarGroupContent>) :
                        (
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href={'/'}>
                                            <Home /> Inicio
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Info /> Sobre DonPulpería
                                    </SidebarMenuButton>
                                    <SidebarMenuSub>
                                        {sinAutenticarTiendaItems?.map((k) => (<SidebarMenuSubItem key={k.title}>
                                            <SidebarMenuSubButton asChild>
                                                <Link href={k.url}>
                                                    <k.icon />
                                                    {k.title}
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>))}
                                    </SidebarMenuSub>
                                </SidebarMenuItem>
                                {/* Separador */}
                                <SidebarSeparator />

                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href={'/login'}>
                                            <LogIn /> Iniciar Sesión
                                        </Link>
                                    </SidebarMenuButton>
                                    <SidebarMenuButton asChild>
                                        <Link href={'/login'}>
                                            <UserPlus /> Registrase
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        )}
                </SidebarGroup>
            </SidebarContent>

            <SidebarSeparator />

            {/* FOOTER */}
            {
                isAuthenticated && (
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
                )
            }
        </Sidebar >
    );
};

export default AppSideBar;

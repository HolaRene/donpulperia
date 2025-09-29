import { BarChart3, MapPin, Package, Shield, Smartphone, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Features() {
    const features = [
        {
            icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
            title: 'Análisis en Tiempo Real',
            description: 'Dashboards interactivos con métricas de ventas, inventario y rendimiento por sucursal.'
        },
        {
            icon: <MapPin className="h-8 w-8 text-green-600" />,
            title: 'Geolocalización Avanzada',
            description: 'Mapas interactivos para visualizar y gestionar todas tus ubicaciones desde una vista satelital.'
        },
        {
            icon: <Package className="h-8 w-8 text-purple-600" />,
            title: 'Control de Inventario',
            description: 'Gestión automatizada de stock con alertas de productos agotados y reposición inteligente.'
        },
        {
            icon: <Smartphone className="h-8 w-8 text-orange-600" />,
            title: 'App Móvil Nativa',
            description: 'Acceso completo desde dispositivos móviles para gestionar tu negocio desde cualquier lugar.'
        },
        {
            icon: <Shield className="h-8 w-8 text-red-600" />,
            title: 'Seguridad Empresarial',
            description: 'Encriptación de datos, copias de seguridad automáticas y control de accesos por roles.'
        },
        {
            icon: <Zap className="h-8 w-8 text-yellow-600" />,
            title: 'Automatización',
            description: 'Procesos automáticos para órdenes de compra, reportes y notificaciones inteligentes.'
        }
    ];

    return (
        <section id="features" className="py-16 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Todo lo que necesitas para crecer
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Funcionalidades diseñadas específicamente para el ecosistema de pulperías y distribuidoras
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center mb-4">
                                    {feature.icon}
                                    <h3 className="text-xl  font-medium ml-3">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-gray-500 flex-grow">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

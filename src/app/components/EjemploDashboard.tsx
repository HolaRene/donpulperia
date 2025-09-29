

import { Card } from '@/components/ui/card';
import { TrendingUp, Store, DollarSign, Users } from 'lucide-react';
import { VentasList } from '../../components/VentaList';
import { PulperiaMap } from '../../components/PulperiaMap';
import { comercios } from '@/data/mockComercio';
import { ventas, ventasResumen } from '@/data/mockVentas';

export function Dashboard() {
    const totalVentasHoy = ventasResumen.ventasHoy;

    const pulperiasActivas = comercios.filter(p => p.estado === 'activa').length;
    const ventasHoy = ventas.length;

    return (
        <section id="dashboard" className="py-16 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Panel de Control en Tiempo Real
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Visualiza el rendimiento de tu red de pulperías con datos actualizados al instante
                    </p>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium">Ventas de Hoy</p>
                                <p className="text-2xl font-bold text-green-600">C${totalVentasHoy}</p>
                            </div>
                            <DollarSign className="h-8 w-8 text-green-600" />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium">Pulperías Activas</p>
                                <p className="text-2xl font-bold text-blue-600">{pulperiasActivas}</p>
                            </div>
                            <Store className="h-8 w-8 text-blue-600" />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium">Transacciones</p>
                                <p className="text-2xl font-bold text-purple-600">{ventasHoy}</p>
                            </div>
                            <TrendingUp className="h-8 w-8 text-purple-600" />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium">Total de Tiendas</p>
                                <p className="text-2xl font-bold text-orange-600">{comercios.length}</p>
                            </div>
                            <Users className="h-8 w-8 text-orange-600" />
                        </div>
                    </Card>
                </div>

                {/* Mapa y Lista de Ventas */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card className="p-6 h-[700px]">
                            <h3 className="text-xl font-semibold mb-4">
                                Ubicaciones de Pulperías
                            </h3>
                            <div className="h-[calc(100%-3rem)] z-0">
                                <PulperiaMap pulperias={comercios} />
                            </div>
                        </Card>
                    </div>

                    <div className="lg:col-span-1">
                        <Card className="p-6 h-[700px]">
                            <VentasList ventas={ventas} />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { ArrowRight, BarChart3, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
    return (
        <section className="relative py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Gestiona tu red de{' '}
                        <span className="text-primary">pulperías</span>{' '}
                        desde una sola plataforma
                    </h1>

                    <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
                        Control total de inventario, ventas en tiempo real y geolocalización
                        de todas tus sucursales. La solución definitiva para distribuidoras modernas.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-3">
                            Comenzar Prueba Gratis
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                            Ver Demo en Vivo
                        </Button>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
                            <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900">Ventas en Tiempo Real</h3>
                            <p className="text-gray-600 text-center mt-2">
                                Monitorea todas las transacciones instantáneamente
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
                            <MapPin className="h-12 w-12 text-green-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900">Geolocalización</h3>
                            <p className="text-gray-600 text-center mt-2">
                                Visualiza todas tus sucursales en un mapa interactivo
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
                            <Zap className="h-12 w-12 text-purple-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900">Automatización</h3>
                            <p className="text-gray-600 text-center mt-2">
                                Reduce el trabajo manual con procesos inteligentes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
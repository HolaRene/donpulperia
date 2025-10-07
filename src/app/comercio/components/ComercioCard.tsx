import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Phone, Verified } from 'lucide-react';
import { motion } from 'framer-motion';
import { Comercio } from '@/types/tipado_comercio';
import Image from 'next/image';

interface ComercioCardProps {
    comercio: Comercio;
    onClick: () => void;
    isSelected?: boolean;
}

export function ComercioCard({ comercio, onClick, isSelected = false }: ComercioCardProps) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className={`cursor-pointer ${isSelected ? 'ring-2 ring-primary' : ''}`}
            onClick={onClick}
        >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                    <div className="flex h-32">
                        <div className="w-32 h-full flex-shrink-0">
                            <Image
                                src={"https://images.pexels.com/photos/3639538/pexels-photo-3639538.jpeg"}
                                alt={comercio.nombre}
                                className="w-full h-full object-cover"
                                width={128}
                                height={128}
                            />
                        </div>
                        <div className="flex-1 p-4 flex flex-col justify-between">
                            <div>
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-semibold text-base line-clamp-1 pr-2">
                                        {comercio.nombre}
                                    </h3>
                                    {/* {comercio.verificado && ( */}
                                    <Verified className="h-4 w-4 text-blue-500 flex-shrink-0" />

                                </div>
                                <Badge variant="secondary" className="mb-2 text-xs">
                                    {comercio.categoria}
                                </Badge>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">{comercio.puntuacion}</span>
                                    <span className="text-xs text-muted-foreground">
                                        (9 reseñas)
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <MapPin className="h-3 w-3" />
                                    <span className="line-clamp-1">{comercio.departamento}, {comercio.direccion}</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Phone className="h-3 w-3" />
                                    <span>{comercio.telefono}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

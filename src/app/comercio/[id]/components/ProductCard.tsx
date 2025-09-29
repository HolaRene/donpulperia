import { Badge } from "@/components/ui/badge";
import { Producto } from "@/types/tipado_comercio"
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const ProductCard = ({ producto }: { producto: Producto }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                    <div className="aspect-video relative">
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                            <Badge variant="secondary" className="text-xs">
                                10
                            </Badge>
                        </div>
                    </div>

                    <div className="p-4">
                        <h3 className="font-semibold text-base mb-2 line-clamp-2">
                            {producto.nombre}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {producto.descripcion}
                        </p>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-lg font-bold text-primary">
                                    {/* {formatPrice(producto.precio)} */}
                                    1000
                                </span>
                                {producto.stock > 0 && (
                                    <p className="text-xs text-muted-foreground">
                                        Stock: {producto.stock} unidades
                                    </p>
                                )}
                            </div>
                            <Badge variant="outline" className="text-xs">
                                {producto.categoria}
                            </Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default ProductCard
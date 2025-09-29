import { Resena } from "@/types/tipado_comercio"
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Verified } from 'lucide-react';
import { motion } from 'framer-motion';

const ResenaCard = ({ resenas }: { resenas: Resena }) => {
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('es-NI', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }} className=''>
            <Card className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={resenas.avatar} alt={resenas.autor} />
                            <AvatarFallback>{resenas.autor.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-sm">{resenas.autor}</h4>
                                {resenas.verificada && (
                                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                                        <Verified className="h-3 w-3 mr-1" />
                                        Verificada
                                    </Badge>
                                )}
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`h-4 w-4 ${star <= resenas.rating
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-muted-foreground">
                                    {formatDate(resenas.fecha)}
                                </span>
                            </div>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                {resenas.comentario}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default ResenaCard
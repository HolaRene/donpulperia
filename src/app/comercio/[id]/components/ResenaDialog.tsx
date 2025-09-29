import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star, MessageSquarePlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';

interface ResenaDialogProps {
    onSubmit: (rating: number, comentario: string) => void;
}

export function ReseñaDialog({ onSubmit }: ResenaDialogProps) {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comentario, setComentario] = useState('');
    const [hoveredStar, setHoveredStar] = useState(0);

    const handleSubmit = () => {
        if (rating > 0 && comentario.trim()) {
            onSubmit(rating, comentario);
            setOpen(false);
            setRating(0);
            setComentario('');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2">
                    <MessageSquarePlus className="h-4 w-4" />
                    Escribir reseña
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Escribir una reseña</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label className="text-sm font-medium mb-2 block">Calificación</Label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <motion.button
                                    key={star}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onMouseEnter={() => setHoveredStar(star)}
                                    onMouseLeave={() => setHoveredStar(0)}
                                    onClick={() => setRating(star)}
                                    className="p-1"
                                >
                                    <Star
                                        className={`h-6 w-6 ${star <= (hoveredStar || rating)
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <Label className="text-sm font-medium mb-2 block">Comentario</Label>
                        <Textarea
                            placeholder="Comparte tu experiencia con este comercio..."
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                            rows={4}
                        />
                    </div>

                    <div className="flex gap-2 justify-end">
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Cancelar
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            disabled={rating === 0 || !comentario.trim()}
                        >
                            Publicar reseña
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

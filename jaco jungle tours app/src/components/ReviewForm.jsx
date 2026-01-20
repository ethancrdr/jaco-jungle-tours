import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Send } from 'lucide-react';

const ReviewForm = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [rating, setRating] = useState(5);
    const [activity, setActivity] = useState('');
    const [comment, setComment] = useState('');
    const [hoveredStar, setHoveredStar] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) return;

        onSubmit({
            name,
            location: location || 'Visitante',
            rating,
            activity,
            text: comment
        });

        // Reset form
        setName('');
        setLocation('');
        setRating(5);
        setActivity('');
        setComment('');
        onClose();
    };

    if (!isOpen) return null;

    return createPortal(
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden p-6 z-10"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">¡Cuéntanos tu experiencia!</h3>
                    <p className="text-gray-500 text-sm mb-6">Tu opinión nos ayuda a mejorar y a otros viajeros a decidir.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Rating */}
                        <div className="flex justify-center gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoveredStar(star)}
                                    onMouseLeave={() => setHoveredStar(null)}
                                    className="p-1 transition-transform hover:scale-110 focus:outline-none"
                                >
                                    <Star
                                        size={32}
                                        className={`${star <= (hoveredStar || rating)
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'fill-gray-100 text-gray-200'
                                            } transition-colors duration-200`}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Inputs */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Nombre</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm"
                                placeholder="Tu nombre"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">País / Ciudad <span className="font-normal text-gray-400">(Opcional)</span></label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm"
                                placeholder="Ej: Costa Rica"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Actividad Realizada</label>
                            <select
                                value={activity}
                                onChange={(e) => setActivity(e.target.value)}
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm bg-white"
                                required
                            >
                                <option value="">Selecciona una actividad...</option>
                                <option value="Paseo al Atardecer">Paseo al Atardecer</option>
                                <option value="ATV Waterfall Adventure">ATV Waterfall Adventure</option>
                                <option value="Isla Tortuga Catamarán">Isla Tortuga Catamarán</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Comentario</label>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={4}
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm resize-none"
                                placeholder="¿Qué fue lo que más te gustó?"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full pym-4 bg-brand-900 text-white rounded-xl font-bold py-3 hover:bg-brand-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-900/20"
                        >
                            <Send size={18} />
                            Publicar Reseña
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>,
        document.body
    );
};

export default ReviewForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquarePlus } from 'lucide-react';
import { useReviews } from '../hooks/useReviews';
import ReviewForm from './ReviewForm';

const Testimonials = () => {
    const { reviews, addReview } = useReviews();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);

    // Calculate average rating
    const averageRating = reviews.reduce((acc, curr) => acc + (curr.rating || 10), 0) / reviews.length;
    const formattedRating = averageRating.toFixed(1);

    const getRatingLabel = (score) => {
        if (score >= 9.5) return "Excepcional";
        if (score >= 9.0) return "Fantástico";
        if (score >= 8.0) return "Muy Bien";
        if (score >= 7.0) return "Bien";
        return "Puntuación";
    };

    const header = (
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-bold mb-2"
                >
                    Comentarios de huéspedes
                </motion.h2>
                <p className="text-xl text-gray-300">Descubre qué dicen nuestros aventureros</p>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                <div className="text-right">
                    <div className="text-2xl font-bold leading-none">{getRatingLabel(averageRating)}</div>
                    <div className="text-sm text-gray-300">{reviews.length} comentarios</div>
                </div>
                <div className="bg-accent-500 text-brand-900 font-bold text-xl w-12 h-12 flex items-center justify-center rounded-lg rounded-tr-none text-white">
                    {formattedRating}
                </div>
            </div>
        </div>
    );

    return (
        <section id="experience" className="py-20 bg-brand-900 text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-6 relative z-10">
                {header}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {reviews.slice(0, visibleCount).map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-900">{t.name}</h4>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <span className="fi fi-cr h-3 w-4 rounded-[1px] object-cover block bg-gray-200"></span> {/* Placeholder flag if needed */}
                                            <span>{t.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="bg-brand-900 text-white text-sm font-bold px-2 py-1 rounded rounded-bl-none">
                                        {t.rating || 10}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 text-sm leading-relaxed mb-4 min-h-[80px]">
                                "{t.text}"
                            </p>

                            <div className="text-xs text-gray-400 border-t pt-3 flex justify-between items-center flex-wrap gap-2">
                                <span>{t.date ? new Date(t.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }) : 'Marzo 2024'}</span>
                                {t.activity && (
                                    <span className="bg-brand-50 text-brand-900 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide">
                                        {t.activity}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center gap-4 mb-12">
                    {visibleCount < reviews.length && (
                        <button
                            onClick={() => setVisibleCount(prev => prev + 3)}
                            className="px-6 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition-all font-medium"
                        >
                            Ver más comentarios
                        </button>
                    )}
                    {visibleCount > 6 && (
                        <button
                            onClick={() => setVisibleCount(6)}
                            className="px-6 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition-all font-medium"
                        >
                            Ver menos
                        </button>
                    )}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="px-8 py-3 bg-accent-500 text-white rounded font-bold hover:bg-accent-600 transition-all flex items-center gap-2 mx-auto"
                    >
                        <MessageSquarePlus size={20} />
                        Escribir un comentario
                    </button>
                </div>


                <ReviewForm
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    onSubmit={addReview}
                />
            </div>
        </section>
    );
};

export default Testimonials;


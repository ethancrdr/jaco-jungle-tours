import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';
import BookingModal from './BookingModal';
import { useTranslation } from 'react-i18next';

import atvWaterfallImg from '../assets/tours/atv-waterfall.jpg';
import islaTortugaImg from '../assets/tours/isla-tortuga.jpg';

const toursData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=2574&auto=format&fit=crop",
        price: "$70",
        rating: 5.0,
    },
    {
        id: 2,
        image: atvWaterfallImg,
        price: "$110",
        rating: 4.9,
    },
    {
        id: 3,
        image: islaTortugaImg,
        price: "$158",
        rating: 5.0,
    },
];

const TourCards = () => {
    const { t } = useTranslation();
    const [selectedTour, setSelectedTour] = useState(null);

    const tours = toursData.map(tour => ({
        ...tour,
        title: t(`tourCards.tours.${tour.id}.title`),
        duration: t(`tourCards.tours.${tour.id}.duration`),
        description: t(`tourCards.tours.${tour.id}.description`),
    }));

    return (
        <section id="tours" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-display font-bold text-gray-900 mb-4"
                    >
                        {t('tourCards.title')}
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('tourCards.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            onClick={() => setSelectedTour(tour)}
                            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                {tour.rating >= 5.0 && (
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm text-gray-900 border border-gray-100">
                                        {t('tourCards.most_popular')}
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
                                        <Star size={14} className="fill-brand-500 text-brand-500" />
                                        {tour.rating} <span className="text-gray-400 font-normal">({Math.floor(Math.random() * 100) + 50})</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-600 transition-colors">
                                    {tour.title}
                                </h3>

                                <p className="text-gray-500 mb-6 line-clamp-2 text-sm leading-relaxed flex-grow">
                                    {tour.description}
                                </p>

                                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>{tour.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={16} />
                                        <span>{t('tourCards.small_groups')}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-medium">{t('tourCards.per_person')}</span>
                                        <span className="text-2xl font-display font-bold text-gray-900">{tour.price}</span>
                                    </div>
                                    <button
                                        className="px-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all text-sm"
                                    >
                                        {t('tourCards.book_btn')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <BookingModal
                    tour={selectedTour}
                    isOpen={!!selectedTour}
                    onClose={() => setSelectedTour(null)}
                />
            </div>
        </section>
    );
};

export default TourCards;

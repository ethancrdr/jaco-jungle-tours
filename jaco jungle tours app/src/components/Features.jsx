import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, MapPin, Clock, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import BookingModal from './BookingModal';

import manuelAntonioImg from '../assets/tours/manuel-antonio.webp';
import waterfallImg from '../assets/tours/waterfall-tour.webp';
import monkeyTourImg from '../assets/tours/monkey-tour.jpg';
import ziplineImg from '../assets/tours/zipline-canopy.jpg';
import paraglidingImg from '../assets/tours/paragliding.jpg';
import crocodileImg from '../assets/tours/crocodile-tour.jpg';
import sunsetBoatImg from '../assets/tours/sunset-private-boat.jpg';
import islaTortugaImg from '../assets/tours/isla-tortuga.jpg';
import jetskiImg from '../assets/tours/jetski-tour.jpg';
import fishingImg from '../assets/tours/sport-fishing.jpg';
import atvJungleImg from '../assets/tours/atv-jungle-tour.jpg';
import atvWaterfallImg from '../assets/tours/atv-waterfall.jpg';
import kayakImg from '../assets/tours/sea-kayak.jpg';
import snorkelImg from '../assets/tours/snorkel-tour.jpg';
import chocolateImg from '../assets/tours/chocolate-tour.webp';
import birdImg from '../assets/tours/bird-watching.jpg';
import canyoningImg from '../assets/tours/extreme-canyoning.jpg';
import paddleExpImg from '../assets/tours/paddle exp.webp';
import cookingClassImg from '../assets/tours/cooking  class.jpg';
import nocturneHikingImg from '../assets/tours/nocturne hiking.jpg';

const toursData = [
    { id: 'manuel-antonio', price: 100, category: 'nature', image: manuelAntonioImg },
    { id: 'waterfall', price: 70, category: 'nature', image: waterfallImg },
    { id: 'monkey-tour', price: 100, category: 'nature', image: monkeyTourImg },
    { id: 'zipline', price: 60, category: 'adventure', image: ziplineImg },
    { id: 'paragliding', price: 130, category: 'adventure', image: paraglidingImg },
    { id: 'crocodile', price: 45, category: 'nature', image: crocodileImg },
    { id: 'horseback', price: 60, category: 'adventure', image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=2574' },
    { id: 'sunset-boat', price: 250, category: 'water', image: sunsetBoatImg },
    { id: 'tortuga-public', price: 158, category: 'water', image: islaTortugaImg },
    { id: 'jetski', price: 120, category: 'water', image: jetskiImg },
    { id: 'fishing', price: 450, category: 'water', image: fishingImg },
    { id: 'atv-2h', price: 75, category: 'adventure', image: atvJungleImg },
    { id: 'kayak', price: 115, category: 'water', image: kayakImg },
    { id: 'snorkel', price: 80, category: 'water', image: snorkelImg },
    { id: 'chocolate', price: 45, category: 'culture', image: chocolateImg },
    { id: 'canyoning', price: 90, category: 'adventure', image: canyoningImg },
    { id: 'sup-paddle', price: 85, category: 'adventure', image: paddleExpImg },
    { id: 'cooking-class', price: 60, category: 'other', image: cookingClassImg },
    { id: 'surf-lesson', price: 55, category: 'water', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=800' },
    { id: 'ocean-hiking', price: 30, category: 'nature', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800' },
    { id: 'airport-transfer', price: 90, category: 'other', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800' },
    { id: 'night-hiking', price: 60, category: 'adventure', image: nocturneHikingImg }
];

export const categories = ['all', 'adventure', 'nature', 'water', 'culture', 'other'];

const Features = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedTour, setSelectedTour] = useState(null);

    useEffect(() => {
        const handleCategoryChange = (e) => {
            if (e.detail && categories.includes(e.detail)) {
                setSelectedCategory(e.detail);
            }
        };

        window.addEventListener('switchCategory', handleCategoryChange);
        return () => window.removeEventListener('switchCategory', handleCategoryChange);
    }, []);

    // Merge static data with translations
    const tours = toursData.map(tour => ({
        ...tour,
        name: t(`tours.${tour.id}.name`),
        description: t(`tours.${tour.id}.description`),
        longDescription: t(`tours.${tour.id}.longDescription`),
        duration: t(`tours.${tour.id}.duration`)
    }));

    const filteredTours = selectedCategory === 'all'
        ? tours
        : tours.filter(tour => tour.category === selectedCategory);

    return (
        <section id="tours" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                        {t('features.header.subtitle')}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight mb-6">
                        {t('features.header.title')}
                    </h2>
                    <p className="text-gray-500 text-lg">
                        {t('features.header.description')}
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${selectedCategory === cat
                                ? 'bg-brand-900 text-white border-brand-900 shadow-md'
                                : 'bg-white text-gray-600 border-transparent hover:border-gray-200 hover:bg-gray-100'
                                }`}
                        >
                            {t(`features.categories.${cat}`)}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence>
                        {filteredTours.map((tour) => (
                            <motion.div
                                key={tour.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedTour(tour)}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={tour.image}
                                        alt={tour.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1 shadow-sm">
                                        <Tag className="w-3 h-3 text-brand-500" />
                                        {t(`features.categories.${tour.category}`)}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors">
                                            {tour.name}
                                        </h3>
                                    </div>

                                    {tour.duration && (
                                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 font-medium">
                                            <Clock className="w-4 h-4 text-brand-500" />
                                            <span>{tour.duration}</span>
                                        </div>
                                    )}

                                    <p className="text-gray-500 text-sm mb-6 flex-grow">
                                        {tour.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                        <div>
                                            <span className="text-xs text-gray-400 block uppercase tracking-wider">{t('features.card.price')}</span>
                                            <span className="text-xl font-bold text-brand-600">${tour.price}</span>
                                        </div>

                                        <button
                                            className="bg-gray-900 hover:bg-brand-600 text-white p-3 rounded-full transition-colors shadow-lg hover:shadow-brand-500/30 flex items-center justify-center group/btn"
                                            aria-label={t('features.card.book_aria') + ` ${tour.name}`}
                                        >
                                            <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-sm">
                        {t('features.footer.note')}
                    </p>
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

export default Features;

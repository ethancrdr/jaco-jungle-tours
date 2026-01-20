import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, MapPin, Clock, Tag } from 'lucide-react';
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

const tours = [
    {
        id: 'manuel-antonio',
        name: 'Manuel Antonio National Park',
        price: 100,
        category: 'Naturaleza',
        image: manuelAntonioImg,
        description: 'Explora uno de los parques nacionales más bellos del mundo.'
    },
    {
        id: 'waterfall',
        name: 'Waterfall Tour',
        price: 70,
        category: 'Naturaleza',
        image: waterfallImg,
        description: 'Caminata y baño en cataratas escondidas.'
    },
    {
        id: 'monkey-tour',
        name: 'Monkey Tour',
        price: 100,
        category: 'Naturaleza',
        image: monkeyTourImg,
        description: 'Encuentro cercano con la vida silvestre local.'
    },
    {
        id: 'zipline',
        name: 'Zipline Canopy',
        price: 60,
        category: 'Aventura',
        image: ziplineImg,
        description: 'Adrenalina pura volando sobre la copa de los árboles.'
    },
    {
        id: 'paragliding',
        name: 'Paragliding',
        price: 130,
        category: 'Aventura',
        image: paraglidingImg,
        description: 'Vuela alto y disfruta de vistas panorámicas incomparables.'
    },
    {
        id: 'crocodile',
        name: 'Crocodile Tour',
        price: 45,
        category: 'Naturaleza',
        image: crocodileImg,
        description: 'Aventura segura observando cocodrilos en su hábitat.'
    },
    {
        id: 'horseback',
        name: 'Cabalgata en la Playa',
        price: 60,
        category: 'Aventura',
        image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=2574', // Using a valid placeholder for now
        description: 'Nuestro tour estrella al atardecer o por la mañana.'
    },
    {
        id: 'sunset-boat',
        name: 'Sunset Private Boat',
        price: 250,
        category: 'Agua',
        image: sunsetBoatImg,
        description: 'Lujo y relajación con un atardecer inolvidable en el mar.'
    },
    {
        id: 'tortuga-public',
        name: 'Isla Tortuga (Public)',
        price: 158,
        category: 'Agua',
        image: islaTortugaImg,
        description: 'Tour en catamarán con todo incluido a Isla Tortuga.'
    },
    {
        id: 'tortuga-private',
        name: 'Isla Tortuga (Private)',
        price: 125,
        category: 'Agua',
        image: islaTortugaImg,
        description: 'Experiencia exclusiva en bote privado a la isla.'
    },
    {
        id: 'jetski',
        name: 'Jetski Tour',
        price: 120,
        category: 'Agua',
        image: jetskiImg,
        description: 'Velocidad y emoción rompiendo las olas.'
    },
    {
        id: 'fishing',
        name: 'Sport Fishing',
        price: 450,
        category: 'Agua',
        image: fishingImg,
        description: 'Pesca deportiva en alta mar con equipo profesional.'
    },
    {
        id: 'atv-2h',
        name: 'ATV Jungle Tour (2hrs)',
        price: 75,
        category: 'Aventura',
        image: atvJungleImg,
        description: 'Recorre senderos de montaña y barro en cuadraciclo.'
    },
    {
        id: 'atv-3h',
        name: 'ATV Waterfall (3hrs)',
        price: 110,
        category: 'Aventura',
        image: atvWaterfallImg,
        description: 'Tour extendido en ATV visitando cataratas.'
    },
    {
        id: 'kayak',
        name: 'Sea Kayak',
        price: 115,
        category: 'Agua',
        image: kayakImg,
        description: 'Rema tranquilamente explorando la costa.'
    },
    {
        id: 'snorkel',
        name: 'Snorkel Tour',
        price: 50,
        category: 'Agua',
        image: snorkelImg,
        description: 'Descubre la vida marina bajo aguas cristalinas.'
    },
    {
        id: 'chocolate',
        name: 'Chocolate Tour',
        price: 45,
        category: 'Cultura',
        image: chocolateImg,
        description: 'Deliciosa experiencia aprendiendo sobre el cacao local.'
    },
    {
        id: 'bird',
        name: 'Bird Watching',
        price: 100,
        category: 'Naturaleza',
        image: birdImg,
        description: 'Avistamiento de especies exóticas con guías expertos.'
    },
    {
        id: 'canyoning',
        name: 'Extreme Canyoning',
        price: 90,
        category: 'Aventura',
        image: canyoningImg,
        description: 'Rappel y descenso de cañones para los más valientes.'
    }
];

export const categories = ['Todos', 'Aventura', 'Naturaleza', 'Agua', 'Cultura'];

const Features = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
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

    const filteredTours = selectedCategory === 'Todos'
        ? tours
        : tours.filter(tour => tour.category === selectedCategory);

    return (
        <section id="tours" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                        Descubre Costa Rica
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight mb-6">
                        Tours y Actividades Inolvidables
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Elige tu próxima gran historia. Desde la adrenalina de la montaña hasta la calma del océano, tenemos la experiencia perfecta para ti.
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
                            {cat}
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
                                        {tour.category}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors">
                                            {tour.name}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 text-sm mb-6 flex-grow">
                                        {tour.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                        <div>
                                            <span className="text-xs text-gray-400 block uppercase tracking-wider">Precio</span>
                                            <span className="text-xl font-bold text-brand-600">${tour.price}</span>
                                        </div>

                                        <button
                                            className="bg-gray-900 hover:bg-brand-600 text-white p-3 rounded-full transition-colors shadow-lg hover:shadow-brand-500/30 flex items-center justify-center group/btn"
                                            aria-label={`Reservar ${tour.name}`}
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
                        * Precios sujetos a cambios. Contáctanos para grupos grandes o paquetes personalizados.
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

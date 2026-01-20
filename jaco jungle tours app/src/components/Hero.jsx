import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import privateSunsetImg from '../assets/tours/sunset-private-boat.jpg';
import atvWaterfallImg from '../assets/tours/atv-waterfall.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-brand-50 relative overflow-hidden pt-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-2 px-4 rounded-full bg-white border border-brand-100 text-brand-600 text-sm font-bold tracking-wide uppercase mb-8 shadow-sm">
                                Tu Aventura Comienza Aquí
                            </span>

                            <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-8">
                                Descubre <br />
                                <span className="text-brand-500">Lo Inexplorado.</span>
                            </h1>

                            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                                Desde la adrenalina de los rápidos y ATVs hasta la serenidad de nuestras playas y montañas. JacoJungleTours es tu puerta a la verdadera Costa Rica.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#tours"
                                    className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20"
                                >
                                    Ver Todos los Tours <ArrowRight size={20} />
                                </a>
                                <a
                                    href="https://wa.me/50687076353"
                                    className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                                >
                                    Contactar Guía
                                </a>
                            </div>

                            <div className="mt-12 flex items-center gap-8 text-gray-500 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-brand-500 rounded-full" />
                                    Aventuras Seguras
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-brand-500 rounded-full" />
                                    Transporte Incluido
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-brand-500 rounded-full" />
                                    Mejores Precios
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Unique Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block h-[600px]"
                    >
                        {/* Main Image - ATV/Adventure */}
                        <div className="absolute top-0 right-10 w-72 h-96 rounded-3xl overflow-hidden shadow-2xl z-20">
                            <img
                                src={atvWaterfallImg}
                                alt="ATV Waterfall"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Secondary Image - Water/Boat */}
                        <div className="absolute bottom-10 left-10 w-80 h-96 rounded-3xl overflow-hidden shadow-xl z-10 border-8 border-white">
                            <img
                                src={privateSunsetImg}
                                alt="Sunset Private Boat"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-100/50 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

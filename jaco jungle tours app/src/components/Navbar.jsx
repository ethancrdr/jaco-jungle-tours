import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from './Features';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCategoryClick = (category) => {
        setIsOpen(false);
        setActiveDropdown(null);

        // Dispatch custom event to switch category in Features component
        const event = new CustomEvent('switchCategory', { detail: category });
        window.dispatchEvent(event);

        // Scroll to tours section
        const toursSection = document.getElementById('tours');
        if (toursSection) {
            toursSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        // Tours is now special handled
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-display font-bold text-gray-900">
                    Jaco<span className="text-brand-500">JungleTours</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a
                        href="#home"
                        className="font-medium transition-colors hover:text-brand-500 text-gray-700"
                    >
                        Home
                    </a>

                    {/* Tours Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('tours')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button
                            className="flex items-center gap-1 font-medium transition-colors hover:text-brand-500 text-gray-700"
                        >
                            Tours <ChevronDown size={16} />
                        </button>

                        <AnimatePresence>
                            {activeDropdown === 'tours' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden py-2"
                                >
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => handleCategoryClick(cat)}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors text-sm"
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a
                        href="#experience"
                        className="font-medium transition-colors hover:text-brand-500 text-gray-700"
                    >
                        Experience
                    </a>

                    <a
                        href="https://wa.me/50687076353"
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-transform hover:scale-105 ${isScrolled ? 'bg-brand-500 text-white' : 'bg-white text-brand-600'}`}
                    >
                        <Phone size={18} />
                        Reservar
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-brand-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} color="#0ea5e9" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 space-y-6 max-h-[80vh] overflow-y-auto"
                    >
                        <a
                            href="#home"
                            className="text-gray-800 text-lg font-medium hover:text-brand-500"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>

                        {/* Mobile Tours List */}
                        <div className="w-full px-10">
                            <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-4 font-bold">Categorías de Tours</p>
                            <div className="grid grid-cols-2 gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryClick(cat)}
                                        className="text-center p-2 bg-gray-50 rounded-lg text-gray-700 text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors"
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <a
                            href="#experience"
                            className="text-gray-800 text-lg font-medium hover:text-brand-500"
                            onClick={() => setIsOpen(false)}
                        >
                            Experience
                        </a>

                        <a
                            href="https://wa.me/50687076353"
                            className="flex items-center gap-2 px-6 py-3 bg-brand-500 text-white rounded-full font-bold"
                        >
                            <Phone size={20} />
                            Chat WhatsApp
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

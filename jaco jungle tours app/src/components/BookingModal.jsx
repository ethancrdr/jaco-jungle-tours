import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ tour, isOpen, onClose }) => {
    const [tourists, setTourists] = useState(1);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    // Reset state when modal opens/closes or tour changes
    useEffect(() => {
        if (isOpen) {
            setTourists(1);
            setDate('');
            setTime('');
        }
    }, [isOpen, tour]);

    if (!isOpen || !tour) return null;

    const pricePerPerson = typeof tour.price === 'string' ? parseFloat(tour.price.replace('$', '')) : tour.price;
    const totalPrice = pricePerPerson * tourists;

    const handleConfirm = () => {
        if (!date || !time) {
            alert('Por favor selecciona una fecha y hora.');
            return;
        }

        const phone = '50687076353'; // Using the number found in Features.jsx
        const message = encodeURIComponent(
            `Hola, me gustaría reservar el siguiente tour:\n\n` +
            `🌴 *Tour:* ${tour.name || tour.title}\n` +
            `👥 *Personas:* ${tourists}\n` +
            `📅 *Fecha:* ${date}\n` +
            `⏰ *Hora:* ${time}\n` +
            `💰 *Precio Total:* $${totalPrice}\n\n` +
            `Quedo atento a la confirmación.`
        );
        const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
                    className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden"
                >
                    {/* Header with Image */}
                    <div className="relative h-48">
                        <img
                            src={tour.image}
                            alt={tour.name || tour.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <div className="absolute bottom-4 left-6 text-white">
                            <h3 className="text-2xl font-bold font-display">{tour.name || tour.title}</h3>
                            <p className="text-white/90 text-sm">{tour.category || 'Aventura'}</p>
                        </div>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Price Display */}
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Precio por persona</p>
                                <p className="text-xl font-bold text-gray-900">${pricePerPerson}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500 font-medium">Total Estimado</p>
                                <p className="text-3xl font-bold text-brand-600">${totalPrice}</p>
                            </div>
                        </div>

                        {/* Form Inputs */}
                        <div className="space-y-4">
                            {/* Tourists Counter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                    <Users size={16} className="text-brand-500" /> Cantidad de Personas
                                </label>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setTourists(Math.max(1, tourists - 1))}
                                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="text-xl font-bold text-gray-900 w-8 text-center">{tourists}</span>
                                    <button
                                        onClick={() => setTourists(tourists + 1)}
                                        className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold hover:bg-gray-800 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Date Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <Calendar size={16} className="text-brand-500" /> Fecha
                                    </label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>

                                {/* Time Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <Clock size={16} className="text-brand-500" /> Hora
                                    </label>
                                    <input
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Confirm Button */}
                        <button
                            onClick={handleConfirm}
                            className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20 transform hover:-translate-y-0.5"
                        >
                            <MessageCircle size={20} />
                            Confirmar Reserva en WhatsApp
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;

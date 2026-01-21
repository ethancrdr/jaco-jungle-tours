import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="contact" className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-display font-bold mb-6">
                            Jaco<span className="text-brand-500">Tours</span>
                        </h3>
                        <p className="text-gray-400 mb-6">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">{t('footer.quick_links')}</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#home" className="hover:text-brand-500 transition-colors">{t('nav.home')}</a></li>
                            <li><a href="#tours" className="hover:text-brand-500 transition-colors">{t('nav.tours')}</a></li>
                            <li><a href="#experience" className="hover:text-brand-500 transition-colors">{t('nav.testimonials')}</a></li>
                            <li><a href="#contact" className="hover:text-brand-500 transition-colors">{t('nav.contact')}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">{t('footer.contact_us')}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <Phone size={20} className="text-brand-500 mt-1" />
                                <span>+506 0000 0000</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={20} className="text-brand-500 mt-1" />
                                <span>info@jacojungletours.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-brand-500 mt-1" />
                                <span>Pastor Diaz Avenue,<br />Jaco, Puntarenas, Costa Rica</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-48 rounded-2xl bg-gray-800 overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1583279114639-65d8364ead7c?q=80&w=2670&auto=format&fit=crop"
                            alt="Map location"
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold bg-black/50 px-3 py-1 rounded backdrop-blur">{t('footer.view_map')}</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} JacoTours. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

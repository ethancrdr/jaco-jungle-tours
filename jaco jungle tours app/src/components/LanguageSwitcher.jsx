import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(false);

    const languages = [
        { code: 'es', label: 'Espanol', flag: '🇪🇸' },
        { code: 'en', label: 'English', flag: '🇺🇸' }
    ];

    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-gray-200"
                aria-label="Select Language"
            >
                <span className="text-xl">{currentLang.flag}</span>
                <span className="text-sm font-medium text-gray-700 hidden lg:block">{currentLang.label}</span>
                <Globe size={16} className="text-gray-500" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${i18n.language === lang.code ? 'bg-brand-50 text-brand-600' : 'text-gray-700'
                                    }`}
                            >
                                <span className="text-xl">{lang.flag}</span>
                                <span className="text-sm font-medium">{lang.label}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;

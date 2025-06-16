import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { 
    Bars3Icon,
    ChevronDownIcon,
    XMarkIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-blue-600">
                Congease
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
                <nav className="flex space-x-8">
                <a href="#FeaturesSection" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                    {t('navbar.features')}
                </a>
                <div className="relative group">
                    <button className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition-colors">
                    {t('navbar.resources')}
                    <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    <a href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        {t('navbar.faq')}
                    </a>
                    <a href="#BlogSection" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        {t('navbar.blog')}
                    </a>
                    </div>
                </div>
                <a href="#PricingSection" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                    {t('navbar.pricing')}
                </a>
                </nav>

                <div className="flex items-center space-x-6">
                {/* Language Switcher - Single Button with Dropdown */}
                <div className="relative group">
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                    <GlobeAltIcon className="h-5 w-5" />
                    <span className="text-sm font-medium uppercase">{i18n.language}</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    <button 
                        onClick={() => changeLanguage('en')} 
                        className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                        English
                    </button>
                    <button 
                        onClick={() => changeLanguage('fr')} 
                        className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'fr' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                        Français
                    </button>
                    <button 
                        onClick={() => changeLanguage('ar')} 
                        className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'ar' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                        العربية
                    </button>
                    </div>
                </div>

                <div className="h-6 w-px bg-gray-200"></div>

                <div className="flex items-center space-x-4">
                    <Link to="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                    {t('navbar.contact')}
                    </Link>
                    <Link 
                    to="/login" 
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2 rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
                    >
                    {t('navbar.login')}
                    </Link>
                </div>
                </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                ) : (
                    <Bars3Icon className="h-6 w-6" />
                )}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
                <a 
                href="#AboutSection" 
                className="block px-3 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium"
                >
                {t('navbar.how_it_works')}
                </a>
                <a 
                href="#FeaturesSection" 
                className="block px-3 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium"
                >
                {t('navbar.features')}
                </a>
                <div>
                <button 
                    className="flex items-center justify-between w-full px-3 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium"
                    onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                >
                    {t('navbar.resources')}
                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileResourcesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                    <a 
                        href="/faq" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    >
                        {t('navbar.faq')}
                    </a>
                    <a 
                        href="#BlogSection" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    >
                        {t('navbar.blog')}
                    </a>
                    </div>
                )}
                </div>
                <a 
                href="#PricingSection" 
                className="block px-3 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium"
                >
                {t('navbar.pricing')}
                </a>
            </div>

            {/* Language Switcher Mobile */}
            <div className="px-4 py-3 border-t border-gray-100">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3">
                </div>
                <div className="grid grid-cols-3 gap-2">
                <button 
                    onClick={() => changeLanguage('en')} 
                    className={`px-3 py-2 rounded-lg text-sm ${i18n.language === 'en' ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                    English
                </button>
                <button 
                    onClick={() => changeLanguage('fr')} 
                    className={`px-3 py-2 rounded-lg text-sm ${i18n.language === 'fr' ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                    Français
                </button>
                <button 
                    onClick={() => changeLanguage('ar')} 
                    className={`px-3 py-2 rounded-lg text-sm ${i18n.language === 'ar' ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                    العربية
                </button>
                </div>
            </div>

            {/* Auth Buttons Mobile */}
            <div className="px-4 py-4 border-t border-gray-100 space-y-3">
                <Link 
                to="/contact" 
                className="block w-full text-center px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium"
                >
                {t('navbar.contact')}
                </Link>
                <Link 
                to="/login" 
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-all"
                >
                {t('navbar.login')}
                </Link>
            </div>
            </div>
        )}
        </header>
    );
}

export default Navbar;
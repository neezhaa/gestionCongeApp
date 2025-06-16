import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import PricingSection from "../components/Home/PricingSection";
// import BlogSection from "../components/Home/BlogSection";
import CTASection from "../components/Home/CTASection";
import ContactUs from "../components/Home/ContactUs";

function Home() {
    const [showButton, setShowButton] = useState(false);
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <FeaturesSection/>
            <PricingSection/>
            <CTASection/>
            <ContactUs/>
            <Footer/>
            {showButton && (
                    <button
                        onClick={scrollToTop}
                        className={`fixed bottom-8 z-50 h-12 w-12 rounded-full bg-amber-500 text-white flex items-center justify-center transition-all duration-300 hover:bg-amber-600 hover:scale-105 shadow-lg hover:shadow-xl ${
                            isRTL ? 'left-8' : 'right-8'
                        }`}
                        aria-label={i18n.language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
                    >
                        <ArrowUpIcon className="h-6 w-6 transition-transform group-hover:-translate-y-0.5" />
                    </button>
                )}
        </>
  )
}

export default Home
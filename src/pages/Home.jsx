// import React from 'react'
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import PricingSection from "../components/Home/PricingSection";
import BlogSection from "../components/Home/BlogSection";
import CTASection from "../components/Home/CTASection";
function Home() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <FeaturesSection/>
        <PricingSection/>
        <BlogSection/>
        <CTASection/>
        <Footer/>

    </>
  )
}

export default Home
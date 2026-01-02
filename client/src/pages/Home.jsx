import React from 'react'
import HeroSection from '../sections/HeroSection'
import LogoCarousel from '../sections/LogoCarousel'
import FeaturesSection from '../sections/FeaturesSection'
import PricingSection from '../sections/PricingSection'
import TestimonialsSection from '../sections/Testimonials'
import Footer from '../components/Footer'
import CtaSection from "../sections/CtaSection.jsx";

const Home = () => {
  return (
    <div className='bg-black mx-auto'> 
       <HeroSection/>
       <LogoCarousel/>
       <FeaturesSection/>
       <PricingSection/>
       <TestimonialsSection/>
       <CtaSection/>
       <Footer/>
    </div>
  )
}

export default Home

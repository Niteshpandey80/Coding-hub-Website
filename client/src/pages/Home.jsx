import HeroSection from '../sections/HeroSection.jsx'
import LogoCarousel from '../sections/LogoCarousel.jsx'
import FeaturesSection from '../sections/FeaturesSection.jsx'
import PricingSection from '../sections/PricingSection.jsx'
import TestimonialsSection from '../sections/Testimonials.jsx'
import CashSection from '../sections/CashSection.jsx'
import Footer from '../components/Footer.jsx'



const Home = () => {
  return (
    <div className='bg-black mx-auto'> 
       <HeroSection/>
       <LogoCarousel/>
       <FeaturesSection/>
       <PricingSection/>
       <TestimonialsSection/>
       <CashSection/>
       <Footer/>
    </div>
  )
}

export default Home

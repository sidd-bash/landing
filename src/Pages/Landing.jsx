import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
export default function Landing() {
  return (
    <div className='flex flex-col font-poppins text-[#663128]'>
        <HeroSection/>
        <Services/>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

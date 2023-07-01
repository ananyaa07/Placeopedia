import React from 'react'
import NavbarH from '../components/NavbarH'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Companies from '../components/Companies'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { UserContext } from '../utils/UserContext'
import NavbarP from '../components/NavbarP'



export default function Homepage() {
  const {isLoggedIn} = useContext(UserContext);

  return (
    <>
    {isLoggedIn ? <NavbarP/> : <NavbarH/>}
      <HeroSection />
      <Features/>
      <Testimonials/> 
      <Companies/>
      <Footer/> 
</>
    
  )
}

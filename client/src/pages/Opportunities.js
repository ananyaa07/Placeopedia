import React from 'react'
import NavbarH from '../components/NavbarH'
import Carousel from '../components/Carousel'
import MenuBar from '../components/MenuBar'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { UserContext } from '../utils/UserContext'
import NavbarP from '../components/NavbarP'

export default function Opportunities() {
  const {isLoggedIn} = useContext(UserContext);
  return (
    <div>
       {isLoggedIn ? <NavbarP/> : <NavbarH/>}
     
      <Carousel/>
      <MenuBar/>
      <Footer/>
    </div>
  )
}

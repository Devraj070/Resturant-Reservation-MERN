import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreWe'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      
      <HeroSection/>
      <Reservation/> 
      <Menu/>
      <Qualities/>
      <About/>
      <WhoAreWe/>
      <Team/>
      
      <Footer/>
    </>
  )
}

export default Home
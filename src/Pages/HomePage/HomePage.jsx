import React from 'react'
import './HomeStyle.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import About from './About/About'
import Sponsors from './Sponsors/Sponsors'
import Contact from './Contact/Contact'
import RcText from './RcText/RcText'
import ParticleBckg from './ParticleBckg/ParticleBckg'


const HomePage = () => {
  return (
    <>
    <ParticleBckg />
      <NavBar />
      <Footer />
      <About />
      <Sponsors />
      <Contact />
      <RcText />
    </>
  )
}

export default HomePage
import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'
import Blog from '../ErrorHandling/UnderConstruction'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About/ >
      <Skills />
      <Work />
      <Blog />
      <Contact />
    </>
  )
}

export default Home
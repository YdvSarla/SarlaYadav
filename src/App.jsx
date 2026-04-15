import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useCursor, useRipple, useStarCanvas, useScrollReveal, useTilt } from './hooks/useEffects'

export default function App() {
  useCursor()
  useRipple()
  useStarCanvas()
  useScrollReveal()
  useTilt('.pc, .sk-card')

  return (
    <>
      <div id="cur"/>
      <div id="ring"/>
      <canvas id="cvs"/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

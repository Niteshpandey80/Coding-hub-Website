import React, { useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

const App = () => {
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const smoother = ScrollSmoother.create({
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    })

    return () => {
      smoother && smoother.kill()
    }
  }, [])

  return (
    <div className='text-zinc-100 bg-black p-4'>
      <NavBar />
      <div id='smooth-content' ref={contentRef}>
        <Home />
      </div>
    </div>
  )
}

export default App

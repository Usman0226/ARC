import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import IdeaPool from './IdeaPool'
import PlanningPhase from './PlanningPhase'
import Execution from './Execution'
import CTA from './CTA'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <IdeaPool />
        <PlanningPhase />
        <Execution />
        <CTA />
        <Footer />
    </div>
  )
}

export default Home
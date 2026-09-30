import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import GridBackground from './components/GridBackground'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </MotionConfig>
  )
}

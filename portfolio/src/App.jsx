import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Demo from './sections/Demo'
import Writings from './sections/Writings'
import Contact from './sections/Contact'
import ChatButton from './components/ChatButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Demo />
        <Writings />
        <Contact />
      </main>
      <ChatButton />
    </div>
  )
}

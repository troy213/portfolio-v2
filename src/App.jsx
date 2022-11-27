import { Navbar } from './components'
import { Hero, About, Experiences, Projects, Skills, Footer } from './pages'
import './App.scss'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App

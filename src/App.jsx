import './App.scss'
import { Navbar } from './components'
import { Hero, About, Experiences, Projects, Skills, Footer } from './pages'

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

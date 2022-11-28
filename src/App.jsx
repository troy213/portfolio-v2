import { useState, useEffect } from 'react'
import { Navbar } from './components'
import { Hero, About, Experiences, Projects, Skills, Footer } from './pages'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')

    console.log(theme)
    if (theme) {
      setIsDarkMode(theme)
    } else {
      localStorage.setItem('theme', isDarkMode)
    }
  }, [])

  console.log(isDarkMode)

  return (
    <div
      className={`container${isDarkMode ? ' theme--dark' : ' theme--light'}`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App

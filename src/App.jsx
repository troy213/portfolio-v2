import { useState, useLayoutEffect } from 'react'
import { Navbar } from './components'
import { Hero, About, Experiences, Projects, Skills, Footer } from './pages'
import useTheme from './hooks/useTheme'

const App = () => {
  const { isDarkMode, setIsDarkMode } = useTheme()
  const [isFirstRender, setIsFirstRender] = useState(true)

  useLayoutEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme'))

    if (theme !== null) {
      setIsDarkMode(theme)
    }

    if (isFirstRender) setIsFirstRender(false)
  }, [])

  const obeserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => obeserver.observe(el))

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('theme', !isDarkMode)
  }

  return (
    <div
      className={`container${isDarkMode ? ' theme--dark' : ' theme--light'}`}
      id='home'
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => toggleDarkMode()} />
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

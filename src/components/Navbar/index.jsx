import { useState } from 'react'
import { MoonIcon, MenuIcon, SunIcon } from '../../assets/icons'
import { Menu } from '../'

const Navbar = (props) => {
  const { isDarkMode, toggleDarkMode } = props

  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <header>
      <nav className='navbar color--primary'>
        <a href='/' className='navbar__logo text--bold text--mono'>
          Erlangga's Journey
        </a>
        <ul>
          <li className='navbar__link text--mono'>
            <a href='#home'>Home</a>
          </li>
          <li className='navbar__link text--mono'>
            <a href='#experiences'>Experiences</a>
          </li>
          <li className='navbar__link text--mono'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='navbar__link text--mono'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='navbar__link text--mono'>
            <a href='#contact'>Contact</a>
          </li>
          <li className='navbar__link text--mono' onClick={toggleDarkMode}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </li>
          <li
            className='navbar__menu'
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <MenuIcon />
          </li>
        </ul>
      </nav>
      <Menu
        isCollapsed={isCollapsed}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </header>
  )
}

export default Navbar

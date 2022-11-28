import { MoonIcon, MenuIcon } from '../../assets/icons'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='navbar__logo text--bold text--mono'>
        Erlangga's Journey
      </span>
      <ul>
        <li className='navbar__link text--mono'>Home</li>
        <li className='navbar__link text--mono'>Experiences</li>
        <li className='navbar__link text--mono'>Skills</li>
        <li className='navbar__link text--mono'>Projects</li>
        <li className='navbar__link text--mono'>Contact</li>
        <li className='navbar__link text--mono'>
          <MoonIcon />
        </li>
        <li className='navbar__menu'>
          <MenuIcon />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

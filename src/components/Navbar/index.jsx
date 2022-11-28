import { MoonIcon, MenuIcon } from '../../assets/icons'

const Navbar = () => {
  return (
    <nav className='navbar color--primary'>
      <a href='#home' className='navbar__logo text--bold text--mono'>
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

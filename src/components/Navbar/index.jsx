import './index.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='navbar__logo text--bold text--6'>
        Erlangga's Journey
      </span>
      <ul>
        <li className='navbar__link'>Home</li>
        <li className='navbar__link'>Experiences</li>
        <li className='navbar__link'>Skills</li>
        <li className='navbar__link'>Projects</li>
        <li className='navbar__link'>Contact</li>
        <li className='navbar__link'>-icon-</li>
      </ul>
    </nav>
  )
}

export default Navbar

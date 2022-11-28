import {
  HomeIcon,
  ExperiencesIcon,
  SkillsIcon,
  ProjectsIcon,
  ContactIcon,
  MoonIcon,
  SunIcon,
} from '../../assets/icons'

const Menu = (props) => {
  const { isCollapsed, isDarkMode, toggleDarkMode } = props

  return (
    <section className={`menu${isCollapsed ? ' collapse' : ''}`}>
      <ul className='menu__item-list'>
        <li>
          <a className='menu__item color--primary' href='#home'>
            <HomeIcon className='menu__item-icon' />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a className='menu__item color--primary' href='#experiences'>
            <ExperiencesIcon className='menu__item-icon' />
            <span>Experiences</span>
          </a>
        </li>
        <li>
          <a className='menu__item color--primary' href='#skills'>
            <SkillsIcon className='menu__item-icon' />
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a className='menu__item color--primary' href='#projects'>
            <ProjectsIcon className='menu__item-icon' />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a className='menu__item color--primary' href='#contact'>
            <ContactIcon className='menu__item-icon' />
            <span>Contact</span>
          </a>
        </li>
        <li className='menu__item color--primary' onClick={toggleDarkMode}>
          {isDarkMode ? (
            <SunIcon className='menu__item-icon' />
          ) : (
            <MoonIcon className='menu__item-icon' />
          )}
          <span>Theme</span>
        </li>
      </ul>
    </section>
  )
}

export default Menu

import { UserIcon, CalendarIcon, MapIcon } from '../../assets/icons'
import { profilePhotoPng } from '../../assets/images'

const About = () => {
  return (
    <section className='about'>
      <h3 className='about__title text--bold text--8 text--mono'>About Me</h3>
      <div className='about__detail-wrapper'>
        <img
          src={profilePhotoPng}
          className='about__profile-photo'
          alt='profile-photo'
        />
        <div className='about__detail'>
          <div className='about__detail-content-wrapper'>
            <UserIcon className='about__detail-icon' />
            <div className='about__detail-content'>
              <p className='text--bold text--mono'>Name</p>
              <p className='text--light'>Tritera Erlangga</p>
            </div>
          </div>
          <div className='about__detail-content-wrapper'>
            <CalendarIcon className='about__detail-icon' />
            <div className='about__detail-content'>
              <p className='text--bold text--mono'>Age</p>
              <p className='text--light'>27 Years</p>
            </div>
          </div>
          <div className='about__detail-content-wrapper'>
            <MapIcon className='about__detail-icon' />
            <div className='about__detail-content'>
              <p className='text--bold text--mono'>Location</p>
              <p className='text--light'>South Tangerang</p>
            </div>
          </div>
        </div>
      </div>
      <p className='about__desc text--light line-height--6'>
        I love traveling, acoustic, drawing, photography and coffee. I graduated
        with a Computer Science Degree and had an interest in Web Development
        which offers me the opportunity to develop new skills while
        strengthening those I already possess. And with more than 7 years of
        working experience as an Office Administrator had enabled me to develop
        good organizational skills and able to work under pressure.
      </p>
    </section>
  )
}

export default About

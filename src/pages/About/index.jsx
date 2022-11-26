import './index.scss'

const About = () => {
  return (
    <section className='about'>
      <h3 className='about__title text--bold text--8'>About Me</h3>
      <div className='about__detail-wrapper'>
        <img src='#' className='about__profile-photo' alt='profile-photo' />
        <div className='about__detail'>
          <i className='about__detail-icon'>-icon-</i>
          <div className='about__detail-content'>
            <p className='text--bold'>Name</p>
            <p className='text--light'>Tritera Erlangga</p>
            <p className='text--bold'>Age</p>
            <p className='text--light'>27 Years</p>
            <p className='text--bold'>Location</p>
            <p className='text--light'>South Tangerang</p>
          </div>
        </div>
        <p className='about__desc text--light'>
          I love traveling, acoustic, drawing, photography and coffee. I
          graduated with a Computer Science Degree and had an interest in Web
          Development which offers me the opportunity to develop new skills
          while strengthening those I already possess. And with more than 7
          years of working experience as an Office Administrator had enabled me
          to develop good organizational skills and able to work under pressure.
        </p>
      </div>
    </section>
  )
}

export default About
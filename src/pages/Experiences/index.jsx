import './index.scss'

const Experiences = () => {
  return (
    <section className='experiences'>
      <h3 className='experiences__title text--bold text--8'>My Experiences</h3>
      <p className='experiences__subtitle text--6'>Educations</p>
      <div className='experiences__timeline'>
        <div className='experiences__content'>
          <div className='experiences__content--left'>
            <p className='experiences__content-title text--bold'>Niomic</p>
            <p className='experiences__content-time text--light-italic text--3'>
              2019 - current
            </p>
          </div>
          <div className='experiences__content--right'>
            <p className='experiences__content-major text--bold'>
              Online Coding Bootcamp
            </p>
            <p className='experiences__content-desc text--light'>
              The lesson mainly focuses on web programming, even though I
              already have the basics of web programming on campus, I need to
              keep learning and practice more, and surely, many things that I
              didn't learn on campus can be found here like AWS, GCP, Golang,
              Firebase, and I always believe learning from many sources are the
              best way to improve your knowledge...
            </p>
            <p className='experiences__content-location text--light-italic'>
              <i className='experiences__content-location-icon'></i>
              Online
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences

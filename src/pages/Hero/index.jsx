import './index.scss'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__left'>
        <span className='hero__pre-title text--bold'>Hi, I'm</span>
        <span className='hero__title text--bold'>Tritera Erlangga</span>
        <span className='hero__subtitle text--bold'>I'm a Web Developer</span>
        <p className='hero__desc text--light'>
          Just a man who pursuing his dream as a professional programmer.
          graduated from Budiluhur University with bachelor degree in Computer
          Science on 2018
        </p>
        <button className='btn btn-orange'>
          Resume <i>-icon-</i>
        </button>
        <div className='hero__icon-container'>
          <i className='hero__icon'>-icon-</i>
          <i className='hero__icon'>-icon-</i>
          <i className='hero__icon'>-icon-</i>
          <i className='hero__icon'>-icon-</i>
        </div>
      </div>
      <div className='hero__right'>
        <img src='#' alt='hero-image' />
      </div>
    </section>
  )
}

export default Hero

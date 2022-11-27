import {
  DownloadIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  GithubIcon,
} from '../../assets/icons'
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
          Resume <DownloadIcon className='btn-icon' />
        </button>
        <div className='hero__icon-container'>
          <InstagramIcon className='hero__icon icon' />
          <FacebookIcon className='hero__icon icon' />
          <LinkedinIcon className='hero__icon icon' />
          <GithubIcon className='hero__icon icon' />
        </div>
      </div>
      <div className='hero__right'>
        <img src='#' alt='hero-image' />
      </div>
    </section>
  )
}

export default Hero

import { Avatar } from '../../components'
import {
  DownloadIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  GithubIcon,
} from '../../assets/icons'

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero__left'>
        <span className='hero__pre-title text--bold text--mono color--primary-light'>
          Hi, I'm
        </span>
        <span className='hero__title text--bold text--mono color--primary'>
          Tritera Erlangga
        </span>
        <span className='hero__subtitle text--bold text--mono color--primary'>
          I'm a Web Developer
        </span>
        <p className='hero__desc text--light line-height--6'>
          Just a man who pursuing his dream as a professional programmer.
          graduated from Budiluhur University with bachelor degree in Computer
          Science on 2018
        </p>
        <button className='btn btn-orange'>
          Resume <DownloadIcon className='btn-icon' />
        </button>
        <div className='hero__icon-container color--primary-light'>
          <a href='https://www.instagram.com/tritera.erlangga'>
            <InstagramIcon className='hero__icon icon' />
          </a>
          <a href='https://www.facebook.com/dev.triteraerlangga'>
            <FacebookIcon className='hero__icon icon' />
          </a>
          <a href='https://www.linkedin.com/in/tritera-erlangga-0ab7b5183'>
            <LinkedinIcon className='hero__icon icon' />
          </a>
          <a href='https://github.com/troy213'>
            <GithubIcon className='hero__icon icon' />
          </a>
        </div>
      </div>
      <div className='hero__right'>
        <Avatar />
      </div>
    </section>
  )
}

export default Hero

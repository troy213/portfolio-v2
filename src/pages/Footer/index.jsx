import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  GithubIcon,
  HeartIcon,
} from '../../assets/icons'
import './index.scss'

const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <div className='footer__wrapper'>
        <div className='footer__container'>
          <div className='footer__left'>
            <p className='footer__left-text text--bold text--8'>
              There’s a lot of good cafe in Southern Jakarta. I love coffee!
              maybe we can get in touch.
            </p>
            <p className='footer__left-text-email text--bold text--8'>
              Start by{' '}
              <a
                href='mailto:tritera.erlangga@gmail.com'
                className='footer__email-link'
              >
                saying hello!
              </a>
            </p>
          </div>
          <div className='footer__right'>
            <div className='footer__text-information'>
              <p className='footer__text text--bold'>Information</p>
              <p className='footer__text text--light'>
                South Tangerang, Banten
              </p>
            </div>
            <a href='#home'>
              <button className='btn btn-yellow'>Back to top</button>
            </a>
            <a
              href='https://www.instagram.com/tritera.erlangga'
              className='footer__socials'
            >
              <InstagramIcon className='footer__socials-icon' />
              <p className='footer__text text--light'>Instagram</p>
            </a>
            <a
              href='https://www.facebook.com/dev.triteraerlangga'
              className='footer__socials'
            >
              <FacebookIcon className='footer__socials-icon' />
              <p className='footer__text text--light'>Facebook</p>
            </a>
            <a
              href='https://www.linkedin.com/in/tritera-erlangga-0ab7b5183'
              className='footer__socials'
            >
              <LinkedinIcon className='footer__socials-icon' />
              <p className='footer__text text--light'>Linkedin</p>
            </a>
            <a href='https://github.com/troy213' className='footer__socials'>
              <GithubIcon className='footer__socials-icon' />
              <p className='footer__text text--light'>Github</p>
            </a>
          </div>
        </div>
        <div className='footer__copyright-container'>
          <div className='footer__copyright-left'>
            <p className='footer__text text--light text--3 text--mono'>
              Erlangga's Journey
            </p>
            <p className='footer__text text--light text--3 text--mono'>
              © 2022 Tritera Erlangga. All Rights Reserved
            </p>
          </div>
          <div className='footer__copyright-right'>
            <p className='footer__text text--light text--3 text--mono'>
              Design with <HeartIcon /> by Tritera Erlangga
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

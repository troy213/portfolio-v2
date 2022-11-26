import './index.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__left'>
          <p className='footer__left-text text--bold text--8'>
            There’s a lot of good cafe in Southern Jakarta. I love coffee! maybe
            we can get in touch. Start by{' '}
            <span className='footer__email-link'>saying hello!</span>
          </p>
        </div>
        <div className='footer__right'>
          <p className='footer__text text--bold'>Information</p>
          <p className='footer__text text--light'>South Tangerang, Banten</p>
          <button className='btn btn-yellow'>Back to top</button>
          <div className='footer__socials'>
            <i className='footer__socials-icon'>-icon-</i>
            <p className='footer__text text--light'>Instagram</p>
          </div>
        </div>
      </div>
      <div className='footer__copyright-container'>
        <div className='footer__left'>
          <p className='footer__text text--light text--3'>Erlangga's Journey</p>
          <p className='footer__text text--light text--3'>
            © 2022 Tritera Erlangga. All Rights Reserved
          </p>
        </div>
        <div className='footer__right'>
          <p className='footer__text text--light text--3'>
            Design with ♥ by Tritera Erlangga
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

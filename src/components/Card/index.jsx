import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import './index.scss'

const Card = () => {
  return (
    <div className='card'>
      <div className='card__header'>
        <p className='card__title text--bold'>E-Commerce</p>
        <button>-icon-</button>
        <button>
          <ExitToAppIcon />
        </button>
      </div>
      <div className='card__body'>
        <p className='card__desc text--light'>
          A fully functioning RESTful e-commerce website project with ReactJS,
          Express, MySQL, JWT Auth, and BCrypt for storing passwords.
        </p>
        <div className='card__tag-container'>
          <div className='card__tag text--light text--3'>React</div>
          <div className='card__tag text--light text--3'>Express</div>
          <div className='card__tag text--light text--3'>MySQL</div>
        </div>
      </div>
    </div>
  )
}

export default Card

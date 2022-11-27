import { GithubIcon, ExitToAppIcon } from '../../assets/icons'
import './index.scss'

const Card = (props) => {
  const { title, githubUrl, appUrl, description, tags } = props

  return (
    <div className='card'>
      <div className='card__header'>
        <p className='card__title text--bold'>{title}</p>
        <a href={githubUrl}>
          <button>
            <GithubIcon />
          </button>
        </a>
        <a href={appUrl}>
          <button>
            <ExitToAppIcon />
          </button>
        </a>
      </div>
      <div className='card__body'>
        <p className='card__desc text--light'>{description}</p>
        <div className='card__tag-container'>
          {tags.map((tag, index) => {
            return (
              <div className='card__tag text--light text--3' key={index}>
                {tag}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Card

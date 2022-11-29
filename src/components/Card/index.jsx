import { GithubIcon, ExitToAppIcon } from '../../assets/icons'

const Card = (props) => {
  const { title, background, githubUrl, appUrl, description, tags } = props

  return (
    <div
      className='card hidden'
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
    >
      <div className='card__content-wrapper'>
        <div className='card__header'>
          <p className='card__title text--bold text--mono'>{title}</p>
          <div className='card__btn-container'>
            <a href={githubUrl}>
              <button>
                <GithubIcon className='flex-center' />
              </button>
            </a>
            <a href={appUrl}>
              <button className='flex-center'>
                <ExitToAppIcon />
              </button>
            </a>
          </div>
        </div>
        <div className='card__body'>
          <p className='card__desc text--light line-height--6'>{description}</p>
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
    </div>
  )
}

export default Card

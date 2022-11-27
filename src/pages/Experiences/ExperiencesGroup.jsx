import { MapPinIcon } from '../../assets/icons'

const ExperiencesGroup = (props) => {
  const { title, data } = props.experiences

  return (
    <>
      <p className='experiences__subtitle text--6'>{title}</p>
      <div className='experiences__timeline'>
        {data.map((experience, index) => {
          const { experienceTitle, time, major, description, location } =
            experience

          return (
            <div className='experiences__content' key={index}>
              <div className='experiences__content--left'>
                <p className='experiences__content-title text--bold'>
                  {experienceTitle}
                </p>
                <em className='experiences__content-time text--light text--3'>
                  {time}
                </em>
              </div>
              <div className='experiences__content--right'>
                <p className='experiences__content-major text--bold'>{major}</p>
                <p className='experiences__content-desc text--light'>
                  {description}
                </p>
                <em className='experiences__content-location text--light'>
                  <MapPinIcon className='experiences__content-location-icon' />
                  {location}
                </em>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ExperiencesGroup

import ExperiencesGroup from './ExperiencesGroup'
import { EDUCATION_EXPERIENCES, CAREERS_EXPERIENCES } from './consts'
import './index.scss'

const Experiences = () => {
  return (
    <section className='experiences'>
      <h3 className='experiences__title text--bold text--8'>My Experiences</h3>
      <ExperiencesGroup experiences={EDUCATION_EXPERIENCES} />
      <ExperiencesGroup experiences={CAREERS_EXPERIENCES} />
    </section>
  )
}

export default Experiences

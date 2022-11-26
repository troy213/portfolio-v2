import { Card } from '../../components'
import './index.scss'

const Projects = () => {
  return (
    <section className='projects'>
      <h3 className='projects__title'>Projects</h3>
      <div className='projects__cards-container'>
        <Card />
      </div>
    </section>
  )
}

export default Projects

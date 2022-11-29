import React from 'react'
import { Card } from '../../components'
import { PROJECTS } from './consts'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h3 className='projects__title text--8 text--mono color--primary'>
        Projects
      </h3>
      <div className='projects__cards-container'>
        {PROJECTS.map((project, index) => {
          return <Card {...project} key={index} nthChild={index + 1} />
        })}
      </div>
    </section>
  )
}

export default Projects

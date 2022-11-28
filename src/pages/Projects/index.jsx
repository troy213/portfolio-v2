import React from 'react'
import { Card } from '../../components'
import { PROJECTS } from './consts'

const Projects = () => {
  return (
    <section className='projects'>
      <h3 className='projects__title text--8 text--mono'>Projects</h3>
      <div className='projects__cards-container'>
        {PROJECTS.map((project, index) => {
          return <Card {...project} key={index} />
        })}
      </div>
    </section>
  )
}

export default Projects

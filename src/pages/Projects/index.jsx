import React from 'react'
import { Card } from '../../components'
import { PROJECTS } from './consts'
import './index.scss'

const Projects = () => {
  return (
    <section className='projects'>
      <h3 className='projects__title'>Projects</h3>
      <div className='projects__cards-container'>
        {PROJECTS.map((project, index) => {
          return <Card {...project} key={index} />
        })}
      </div>
    </section>
  )
}

export default Projects

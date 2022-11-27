import SkillGroup from './SkillGroup'
import { COMPUTER_SKILLS, OTHER_SKILLS } from './consts'
import './index.scss'

const Skills = () => {
  return (
    <section className='skills'>
      <h3 className='skills__title text--bold text--8'>Skills</h3>
      <SkillGroup skills={COMPUTER_SKILLS} />
      <SkillGroup skills={OTHER_SKILLS} />
    </section>
  )
}

export default Skills

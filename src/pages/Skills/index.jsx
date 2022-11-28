import SkillGroup from './SkillGroup'
import { COMPUTER_SKILLS, OTHER_SKILLS } from './consts'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className='skills__wrapper'>
        <h3 className='skills__title text--bold text--8 text--mono color--primary'>
          Skills
        </h3>
        <SkillGroup skills={COMPUTER_SKILLS} />
        <SkillGroup skills={OTHER_SKILLS} />
      </div>
    </section>
  )
}

export default Skills

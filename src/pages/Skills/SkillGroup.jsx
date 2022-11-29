const SkillGroup = (props) => {
  const { title, data } = props.skills

  return (
    <>
      <p className='skills__subtitle text--bold text--6 text--mono'>{title}</p>
      <div className='skills__icons-container color--primary'>
        {data.map((skill, index) => {
          return <skill.icon key={index} className='skills__icon' />
        })}
      </div>
    </>
  )
}

export default SkillGroup

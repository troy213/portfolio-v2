const SkillGroup = (props) => {
  const { title, data } = props.skills

  return (
    <>
      <p className='skills__subtitle text--6'>{title}</p>
      <div className='skills__icons-container'>
        {data.map((skill, index) => {
          return <skill.icon key={index} className='skills__icon' />
        })}
      </div>
    </>
  )
}

export default SkillGroup

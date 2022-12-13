import { useState } from 'react'
import { Modal } from '../../components'
import useTheme from '../../hooks/useTheme'

const SkillGroup = (props) => {
  const { title, data } = props.skills
  const { isDarkMode } = useTheme()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState([])

  const openModal = (description) => {
    setModalData(description)
    setModalIsOpen(true)
  }

  return (
    <>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        isDarkMode={isDarkMode}
      >
        <div className='skills__modal'>
          <span
            className={`skills__modal-header text--bold text--5${
              isDarkMode ? ' color--primary-light' : ' color--primary'
            }`}
          >
            What I have learned
          </span>
          <ul className='skills__modal-list'>
            {modalData.map((description, index) => {
              return (
                <li className='skills__modal-item text--light' key={index}>
                  {description}
                </li>
              )
            })}
          </ul>
        </div>
      </Modal>
      <p className='skills__subtitle text--bold text--6 text--mono'>{title}</p>
      <div className='skills__icons-container color--primary'>
        {data.map((skill, index) => {
          return (
            <skill.icon
              key={index}
              className='skills__icon'
              onClick={() => openModal(skill.desc)}
            />
          )
        })}
      </div>
    </>
  )
}

export default SkillGroup

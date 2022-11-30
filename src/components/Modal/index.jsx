import ReactDOM from 'react-dom'

const Modal = ({ open, children, onClose, isDarkMode }) => {
  const handleModal = (e) => {
    if (e.target.id === 'modal') {
      onClose()
    }
  }

  if (!open) {
    return null
  }

  return ReactDOM.createPortal(
    <div className='modal' id='modal' onClick={handleModal}>
      <div className={`modal__container${isDarkMode ? ' dark' : ''}`}>
        {children}
        <span className='modal__close' onClick={onClose}>
          &times;
        </span>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal

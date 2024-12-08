import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.css'

TrailerModal.propTypes = {
  trailerVideoUrl: PropTypes.string,
  setOpen: PropTypes.any,
  isOpen: PropTypes.bool
}

export default function TrailerModal (props) {
  const { trailerVideoUrl, setOpen, isOpen } = props
  const modalRef = useRef(null)
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setOpen])

  
  return (
    <div  className={`modalBackdrop ${isOpen ? 'active' : ''}`}>
      <div ref={modalRef} className="modal">
        <div className='modalHeader'>
          <button className="close" onClick={() => setOpen(prev => !prev)}>&times;</button>
        </div>
        <div className="modalContent">
          <video
            className='modalVideo' 
            controls 
            autoPlay
            src={`https://static.namava.ir/${trailerVideoUrl}`}>
          </video>
        </div>
      </div>
    </div>
  )
}

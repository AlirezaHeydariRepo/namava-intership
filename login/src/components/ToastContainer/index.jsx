import React from 'react'
import warning from '../../assets/images/warning.svg'
import './style.css'
export default function ToastContainer(props) {
  const {toast} = props

  return (
    <div className={`toastContainer ${toast ? 'show' : ''}`}>
      <img className='toastIcon' src={warning} alt="toastIcon" />
      <span className='toastText'>ایمیل نامعتبر است.</span>
    </div>
  )
}

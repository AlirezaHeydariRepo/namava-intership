import React from 'react'
import './style.css'

export default function CheckBox (props) {
  const { onClick, value, label, className = '' } = props

  return (
    <span
      className={`container ${className}`}
      onClick={onClick}
    >
      <span className="text">{label}</span>
      <input type="checkbox" checked={value ? 'checked' : ''} readOnly/>
      <span className="checkmark"></span>
    </span>
  )
}

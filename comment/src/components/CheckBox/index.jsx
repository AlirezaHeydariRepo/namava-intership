import React from 'react'
import './style.css'

export default function CheckBox (props) {
  const { setSpoil, spoil } = props
  return (
    <span className='checkBox'>
      <input className='checkBoxInput' type="checkbox" checked={spoil} onClick={() => setSpoil(prev => !prev)}/>
      <span className='checkmark'></span>
      <span className="checkBoxText">این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.</span>
    </span>
  )
}

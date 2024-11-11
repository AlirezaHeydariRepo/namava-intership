import React from 'react'
import './style.css'
import chevronDown from '../../assets/img/chevron-Down.png'
import warning from '../../assets/img/warning.svg'

export default function SpoiledComment () {
  return (
    <div className='spoiledComment'>
      <div className='spoilWarning'>
        <img className="warningIcon" src={warning} alt="" />
        <span className="text">این نظر حاوی اسپویلر است و داستان فیلم را لو می دهد.</span>
      </div>
      <img className='chevronDown' src={chevronDown} alt="chevronDown"/>
    </div>
  )
}

import React, { useState } from 'react'
import './style.css'

export default function FilterBox () {
  const [type, setType] = useState('')
  const isActive = (newType) => {
    if (type === '') {
      setType(newType)
    } else if (type === newType) {
      setType('')
    } else if (newType === 'movie') {
      if (type === 'all') {
        setType('series')
      } else {
        setType('all')
      }
    } else if (newType === 'series') {
      if (type === 'all') {
        setType('movie')
      } else {
        setType('all')
      }
    }
  }
  return (
    <div className='filter-box'>
      <div className="filter-title">فیلترها</div>
      <div className="filters">
        <span
          className={`container ${type === 'all' || type === 'movie' ? 'movie' : ''}`}
          onClick={() => isActive('movie')}>
          <span className="text">فیلم</span>
          <input type="checkbox" checked={type === 'all' || type === 'movie' ? 'checked' : ''}/>
          <span className="checkmark"></span>
        </span>
        <span
          className={`container ${type === 'all' || type === 'series' ? 'series' : ''}`}
          onClick={() => isActive('series')}>
          <span className="text">سریال</span>
          <input type="checkbox" checked={type === 'all' || type === 'series' ? 'checked' : ''}/>
          <span className="checkmark"></span>
        </span>
      </div>
    </div>
  )
}

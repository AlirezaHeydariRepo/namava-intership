import React from 'react'
import './style.css'

export default function FilterBox () {
  return (
    <div className='filter-box'>
      <div className="filter-title">فیلترها</div>
      <div className="filters">
        <label className="container">
          <span className="text">فیلم</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span className="text">سریال</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  )
}

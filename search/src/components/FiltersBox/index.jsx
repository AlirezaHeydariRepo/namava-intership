import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
FilterBox.propTypes = {
  type: PropTypes.string,
  setType: PropTypes.any
}
export default function FilterBox (props) {
  const isActive = (newType) => {
    if (props.type === '') {
      props.setType(newType)
    } else if (props.type === newType) {
      props.setType('')
    } else if (newType === 'movie') {
      if (props.type === 'all') {
        props.setType('series')
      } else {
        props.setType('all')
      }
    } else if (newType === 'series') {
      if (props.type === 'all') {
        props.setType('movie')
      } else {
        props.setType('all')
      }
    }
  }
  return (
    <div className='filter-box'>
      <div className="filter-title">فیلترها</div>
      <div className="filters">
        <span
          className={`container ${props.type === 'all' || props.type === 'movie' ? 'movie' : ''}`}
          onClick={() => isActive('movie')}>
          <span className="text">فیلم</span>
          <input type="checkbox" checked={props.type === 'all' || props.type === 'movie' ? 'checked' : ''}/>
          <span className="checkmark"></span>
        </span>
        <span
          className={`container ${props.type === 'all' || props.type === 'series' ? 'series' : ''}`}
          onClick={() => isActive('series')}>
          <span className="text">سریال</span>
          <input type="checkbox" checked={props.type === 'all' || props.type === 'series' ? 'checked' : ''}/>
          <span className="checkmark"></span>
        </span>
      </div>
    </div>
  )
}

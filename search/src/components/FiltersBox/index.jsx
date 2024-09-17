import React from 'react'
import './style.css'
import CheckBox from './CheckBox'
export default function FilterBox (props) {
  const { type, setType } = props
  const isMovieSelected = (type === 'movie' || type === 'all')
  const isSeriesSelected = (type === 'series' || type === 'all')

  const changeType = (selectedType) => {
    if (type === '') {
      setType(selectedType)
    } else if (type === selectedType) {
      setType('')
    } else if (type === 'all') {
      if (selectedType === 'movie') {
        setType('series')
      } else if (selectedType === 'series') {
        setType('movie')
      }
    } else {
      setType('all')
    }
  }

  return (
    <div className='filter-box'>
      <div className="filter-title">فیلترها</div>
      <div className="filters">
        <CheckBox
          label={'فیلم'}
          onClick={() => changeType('movie')}
          value={isMovieSelected}
          className={isMovieSelected ? 'movie' : ''}
        />
        <CheckBox
          label={'سریال'}
          onClick={() => changeType('series')}
          value={isSeriesSelected}
          className={isSeriesSelected ? 'series' : ''}
        />
      </div>
    </div>
  )
}

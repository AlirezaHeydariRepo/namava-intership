/* eslint-disable react/prop-types */
import React from 'react'
import './style.css'
import Arrow from '../Arrow/index'

export default function Slide (props) {
  // eslint-disable-next-line no-unused-vars
  const {
    coverLandscape,
    logo, 
    caption,
    imdb = '', 
    currIndex, 
    ageRange, 
    dataLength
    ,setIndexOfCurrItem} = props

  const handleNext = () => {
    const nextSlide = ( currIndex + 1 ) % dataLength
    setIndexOfCurrItem(nextSlide)
  }
  const handlePrev = () => {
    const nextSlide = ( currIndex - 1 + dataLength ) % dataLength
    setIndexOfCurrItem(nextSlide)
  }

  return (
    <div
      className='slide'
      style={{ backgroundImage: `url(https://static.namava.ir${coverLandscape})` }}>
      <div className="content">
        <img 
          src={`https://static.namava.ir${logo}`} 
          alt="logo" 
          className='logo'
        />
        <div className="caption">{caption}</div>
        <div className="description">
          {ageRange &&
            <div className={`ageRange`}>
              {`${ageRange}+`}
            </div>
          }
          {imdb && 
            <div className="imdb">
              <span className="imdbText">{imdb}</span>
            </div>
          }
        </div>
      </div>
      <div className="arrow">
        <div className='prev' onClick={() => handlePrev()}>
          <Arrow />
        </div>
        <div className='next' onClick={() => handleNext()}>
          <Arrow />
        </div>
      </div>
    </div>
  )
}

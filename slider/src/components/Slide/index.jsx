/* eslint-disable react/prop-types */
import React from 'react'
import './style.css'
import Arrow from '../SvgIcons/Arrow'
import Imdb from '../SvgIcons/Imdb'
import PlayIcon from '../SvgIcons/PlayIcon'

export default function Slide (props) {
  const {
    coverLandscape,
    logo,
    caption,
    imdb = '',
    currIndex,
    ageRange,
    dataLength,
    setIndexOfCurrItem,
    trailerVideoUrl,
    setOpen } = props

  
  
  
  
  const handleNext = () => {
    const nextSlide = ( currIndex + 1 ) % dataLength
    setIndexOfCurrItem(nextSlide)
  }
  const handlePrev = () => {
    const nextSlide = ( currIndex - 1 + dataLength ) % dataLength
    setIndexOfCurrItem(nextSlide)
  }
  
  function convertEnglishToPersianNumbers (num) {
    let str = num.toString()
    const englishNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    for (let i = 0; i < 10; i++) {
      str = str.replace(englishNumbers[i].toString(), persianNumbers[i])
    }
    return str
  }
  
  const renderAgeRange = () => {
    switch (ageRange) {
      case 18:
        return (
          <div className="ageRange red">
            {`${convertEnglishToPersianNumbers(ageRange)}+`}
          </div>
        )
      case 15:
        return (
          <div className="ageRange orange">
            {`${convertEnglishToPersianNumbers(ageRange)}+`}
          </div>
        )
      case 12:
        return (
          <div className="ageRange yellow">
            {`${convertEnglishToPersianNumbers(ageRange)}+`}
          </div>
        )
      case 3:
        return (
          <div className="ageRange green">
            {`${convertEnglishToPersianNumbers(ageRange)}+`}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div
      className='slide'
      style={{ backgroundImage: `url(https://static.namava.ir/${coverLandscape})` }}
    >
      <div className="content">
        <img 
          src={`https://static.namava.ir${logo}`} 
          alt="logo" 
          className='logo'
        />
        <div className="caption">{caption}</div>
        <div className="description">
          {ageRange &&
            renderAgeRange()
          }
          {imdb && 
            <div className="imdb">
              <Imdb className="imdbIcon"/>
              <span className="imdbText">{imdb}</span>
            </div>
          }
        </div>
        <div className="buttons">
          <a 
            href='https://www.namava.ir/auth/login?auth_return=eyJwYXRobmFtZSI6Ii9zZXJpZXMvMjM2MTIzLSVEOCVCQSVEOCVCMSVEOCVBOCVEOCVBQSJ9' 
            className="login"
          >
            <PlayIcon className='loginIcon'/>
            <p className='loginText'>ورود و پخش</p>
          </a>
          {trailerVideoUrl &&
            <button className="videoModal" onClick={() => setOpen(true)}>
            پیش نمایش
            </button>
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

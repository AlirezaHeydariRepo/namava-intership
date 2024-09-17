import React from 'react'
import notFoundImage from '../../../../assets/images/not-found.png'

export default function NotFound () {
  return (
    <div className='not-found'>
      <img className="no-found-image" src={notFoundImage} alt="not-found" />
      <span className="no-found-text">موردی یافت نشد.</span>
    </div>
  )
}

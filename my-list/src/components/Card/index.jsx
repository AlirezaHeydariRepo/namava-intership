import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../../icons/Select'
import './style.css'

Card.propTypes = {
  imageUrl: PropTypes.string,
  caption: PropTypes.string,
  isSelected: PropTypes.string,
}

export default function Card ( props ) {
  const { imageUrl, caption, isSelected } = props
  return (
    <div className='cardContainer'>
      <div className={`placeholder ${isSelected}`}>
        {isSelected === 'selected' &&
          <div className='selectedSvg'>
            <Select />
          </div>
        }
        <img className='cardImage' src={`https://www.namava.ir/${imageUrl}`} alt="cardImage" />
      </div>
      <p className="cardCaption">{caption}</p>
    </div>
  )
}

import React from 'react'
import './style.css'
import PropTypes from 'prop-types'
Card.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  url: PropTypes.any,
  image_url: PropTypes.any
}
export default function Card (props) {
  return (
    <a className='card' href={props.url}>
      <img className='card-image' src={props.image_url} alt={`image ${props.name}`}/>
      <span className='card-text'>{props.name}</span>
    </a>
  )
}

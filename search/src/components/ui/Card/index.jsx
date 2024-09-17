import React from 'react'
import './style.css'

export default function Card (props) {
  const { url, imageUrl, name } = props

  return (
    <a className='card' href={url}>
      <img className='card-image' src={imageUrl} alt={`image ${name}`}/>
      <span className='card-text'>{name}</span>
    </a>
  )
}

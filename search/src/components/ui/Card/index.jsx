import React from 'react'
import './style.css'

export default function Card (props) {
  const { url, imageUrl, name } = props

  return (
    <a className='card' href={url}>
      <div className='placeholder'>
        <img className='card-image' src={imageUrl} alt={`image ${name}`}/>
      </div>
      <span className='card-text'>{name}</span>
    </a>
  )
}

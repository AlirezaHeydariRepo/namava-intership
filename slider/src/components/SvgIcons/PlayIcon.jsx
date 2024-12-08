import React, { useState } from 'react'

export default function PlayIcon () {
  const [hoverColor, setHoverColor] = useState('currentColor')
  const handleMouseOver = () => setHoverColor('#FFFFFF')
  const handleMouseOut = () => setHoverColor('currentColor')

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 20 20"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ fill: hoverColor }} 
      className="Component-icon-0-1-74">
      <path d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z"></path>
    </svg>
  )
}

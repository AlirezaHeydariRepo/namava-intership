/* eslint-disable react/prop-types */
import React from 'react'
import './style.css'
export default function Slide (props) {
  // eslint-disable-next-line no-unused-vars
  const {coverLandscape, logo, caption, imdb, trailer} = props
  return (
    <div>{caption} </div>
  )
}

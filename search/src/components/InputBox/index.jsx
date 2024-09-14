import React from 'react'
import './style.css'
import searchIcon from '../../assets/images/search.png'
export default function InputBox () {
  return (
    <div className='inputBox'>
      <img src={searchIcon} alt="search-icon" />
      <input type="text" placeholder='فیلم، سریال، بازیگر و ژانر'/>
    </div>
  )
}

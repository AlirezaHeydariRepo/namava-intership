import React, { useState, useRef } from 'react'
import './style.css'
import searchIcon from '../../assets/images/search.png'

export default function InputBox (props) {
  // eslint-disable-next-line no-unused-vars
  const { setQuery, query } = props
  const [currInput, setCurrInput] = useState(query)
  const timer = useRef()
  const setInput = (value) => {
    setCurrInput(value)
    clearTimeout(timer.current)
    timer.current = setTimeout(() =>
      setQuery(value)
    , 1000)
  }

  return (
    <div className='inputBox'>
      <img src={searchIcon} alt="search-icon" />
      <input
        className='searchedText'
        type="text"
        placeholder='فیلم، سریال، بازیگر و ژانر'
        onChange={(e) => setInput(e.target.value)}
        value={currInput}
      />
    </div>
  )
}

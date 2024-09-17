import React from 'react'
import './style.css'
import searchIcon from '../../assets/images/search.png'

export default function InputBox (props) {
  const { setQuery, query } = props
  const getInput = (e) => {
    setQuery(e)
  }

  return (
    <div className='inputBox'>
      <img src={searchIcon} alt="search-icon" />
      <input
        className='searchedText'
        type="text"
        placeholder='فیلم، سریال، بازیگر و ژانر'
        onChange={(e) => getInput(e.target.value)}
        value={query}
      />
      <img src="" alt="" />
    </div>
  )
}

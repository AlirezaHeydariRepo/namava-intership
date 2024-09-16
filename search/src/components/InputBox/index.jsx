import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import searchIcon from '../../assets/images/search.png'
InputBox.propTypes = {
  input: PropTypes.any,
  setInput: PropTypes.any
}
export default function InputBox (props) {
  const getInput = (e) => {
    props.setInput(e)
  }
  return (
    <div className='inputBox'>
      <img src={searchIcon} alt="search-icon" />
      <input
        className='searchedText'
        type="text"
        placeholder='فیلم، سریال، بازیگر و ژانر'
        onChange={(e) => getInput(e.target.value)}/>
    </div>
  )
}

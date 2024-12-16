import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Descending from '../../icons/Descending.jsx'
import Ascending from '../../icons/Ascending.jsx'
import Delete from '../../icons/Delete.jsx'
import './style.css'

DefaultHeader.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  setOpenRemoveTab: PropTypes.bool,
}

export default function DefaultHeader(props) {
  const { data , setData, setOpenRemoveTab } = props

  const [sort, setSort] = useState('Ascending')
  const handleSort = () => {
    const sortedData = data.slice().reverse()
    sort === 'Ascending' ? setSort('Descending') : setSort('Ascending')
    console.log("reversed :",sortedData)
    setData(sortedData)
  }
  const handleChangeHeader = () => {
    setOpenRemoveTab(prev => !prev)
  }
  return (
    <header>
      <div className="title">
          لیست من
      </div>
      <div className="icons">
        <div className='sortIcon' onClick={() => handleSort()}>
          {sort === 'Ascending' ? <Ascending /> : <Descending />} 
        </div>
        <div className='deleteIcon' onClick={handleChangeHeader}>
          <Delete />
        </div>
      </div>
    </header>
  )
}

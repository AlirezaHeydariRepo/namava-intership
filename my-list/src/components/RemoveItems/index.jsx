import React from 'react'
import PropTypes from 'prop-types'
import Delete from '../../icons/Delete.jsx'
import './style.css'

RemoveHeader.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  setOpenRemoveTab: PropTypes.bool,
  selectedIds: PropTypes.object.isRequired,
  setSelectedIds: PropTypes.func.isRequired,
}
export default function RemoveHeader (props) {
  const { data, setData, selectedIds, setSelectedIds, setOpenRemoveTab } = props
  const removeItems = () => {
    if (selectedIds.length !== 0) {
      const currData = data.filter((item) => !selectedIds.includes(item.id))
      discard()
      setData(currData)
    }
  }
  const discard = () => {
    setSelectedIds([])
    setOpenRemoveTab(prev => !prev)
  }
  
  return (
    <header>
      <div className="titleText">
      محتواهای مورد نظر خود را برای حذف از لیست انتخاب کنید.
      </div>
      <div className="icons">
        <div className={`deleteItems ${selectedIds.length ? 'red' : ''}`}>
          <div className='deleteIcon' onClick={removeItems}>
            <Delete />
          </div>
          <span className="deleteText">حذف</span>
        </div>
        <div className="cancel" onClick={discard}>
          <span className="icon">&times;</span>
          <span className="cancelText">لغو</span>
        </div>
      </div>
    </header>
  )
}

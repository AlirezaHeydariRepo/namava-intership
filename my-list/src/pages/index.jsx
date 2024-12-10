/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sort from '../icons/Sort.jsx'
import Delete from '../icons/Delete.jsx'
import './style.css'
import Card from '../components/Card/Card/index.jsx'
import { use } from 'react'

export default function MyList () {
  const [data, setData] = useState([])
  const [remove, setRemove] = useState(false)
  const [selectedIds, setSelectedIds] = useState([])
  const [showToast, setShowToast] = useState(false)
  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.namava.ir/api/v2.0/post-groups/1263/medias?pi=1&ps=20')
      const dataArray = response?.data?.result
      setData(dataArray)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  console.log(data)

  const handleSort = () => {
    const sortedData = data.slice().reverse()
    console.log("reversed :",sortedData)
    setData(sortedData)
  }
  const handleRemove = () => {
    const currRemoveState = !remove
    setRemove(currRemoveState)
    if (remove) setSelectedIds([])
  }
  const handleSelectCard = (id) => {
    if (remove) {
      const isSelected = selectedIds.includes(id)
      setSelectedIds(isSelected ? selectedIds.filter(i => i !== id) : [...selectedIds, id])
      console.log(selectedIds)
    } 
  }

  return (
    <div className='myList'>
      {!remove &&
        <header>
          <div className="title">
                لیست من
          </div>
          <div className="icons">
            <div className='sortIcon' onClick={() => handleSort()}>
              <Sort />  
            </div>
            <div className='deleteIcon' onClick={handleRemove}>
              <Delete />
            </div>
          </div>
        </header>
      } 
      {remove &&
        <header>
          <div className="titleText">
            محتواهای مورد نظر خود را برای حذف از لیست انتخاب کنید.
          </div>
          <div className="icons">
            <div className={`deleteItems ${selectedIds.length ? 'red' : ''}`}>
              <div className='deleteIcon'>
                <Delete />
              </div>
              <span className="deleteText">حذف</span>
            </div>
            <div className="cancel" onClick={handleRemove}>
              <span className="icon">&times;</span>
              <span className="cancelText">لغو</span>
            </div>
          </div>
        </header>
      }
      <ul className="container">
        {
          data.map((item) => {
            return (
              <li 
                key={item.id} 
                className='card'
                onClick={() => handleSelectCard(item.id)}>
                <Card
                  caption={item?.caption} 
                  imageUrl={item?.imageUrl}
                  isSelected={selectedIds.includes(item.id) ? 'selected' : ''}
                />

              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

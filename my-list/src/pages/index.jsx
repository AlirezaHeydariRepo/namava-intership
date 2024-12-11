/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Ascending from '../icons/Ascending.jsx'
import Delete from '../icons/Delete.jsx'
import './style.css'
import Card from '../components/Card/Card/index.jsx'
import { use } from 'react'
import Toast from '../components/Card/Toast/index.jsx'
import Descending from '../icons/Descending.jsx'
import EmptyState from '../components/Card/EmptyState/index.jsx'

export default function MyList () {
  const [data, setData] = useState([])
  const [sort, setSort] = useState('Ascending')
  const [openRemoveTab, setOpenRemoveTab] = useState(false)
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
    sort === 'Ascending' ? setSort('Descending') : setSort('Ascending')
    console.log("reversed :",sortedData)
    setData(sortedData)
  }
  const handleOpenRemoveTab = () => {
    const currRemoveState = !openRemoveTab
    setOpenRemoveTab(currRemoveState)
    if (openRemoveTab) setSelectedIds([])
  }
  const removeItems = () => {
    const currData = data.filter((item) => {
      return !selectedIds.includes(item.id)
    })
    handleOpenRemoveTab()
    setData(currData)
  }
  const handleSelectCard = (id) => {
    if (openRemoveTab) {
      const isSelected = selectedIds.includes(id)
      if (isSelected) {
        setSelectedIds(selectedIds.filter(i => i !== id))
      } else if (selectedIds.length < 3 && !isSelected) {
        setSelectedIds([...selectedIds, id])
      } else if (selectedIds.length >= 3 && !isSelected) {
        handleToast()
      }
    }
  }
  const handleToast = () => {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 4000)
  }

  return (
    <div className='myList'>
      {<Toast showToast={showToast} />}
      {!openRemoveTab &&
        <header>
          <div className="title">
                لیست من
          </div>
          <div className="icons">
            <div className='sortIcon' onClick={() => handleSort()}>
              {sort === 'Ascending' ? <Ascending /> : <Descending />} 
            </div>
            <div className='deleteIcon' onClick={handleOpenRemoveTab}>
              <Delete />
            </div>
          </div>
        </header>
      }
      {openRemoveTab &&
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
            <div className="cancel" onClick={handleOpenRemoveTab}>
              <span className="icon">&times;</span>
              <span className="cancelText">لغو</span>
            </div>
          </div>
        </header>
      }
      {
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
      }
      {(data.length) === 0 &&
        <EmptyState />
      }
    </div>
  )
}

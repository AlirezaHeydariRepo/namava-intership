/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/ss/Card/index.jsx'
import Toast from '../components/ss/Toast/index.jsx'
import EmptyState from '../components/EmptyState/index.jsx'
import DefaultHeader from '../components/DefaultHeader/index.jsx'
import RemoveHeader from '../components/RemoveItems/index.jsx'
import LoadingLottie from '../components/LoadingLottie/index.jsx'
import './style.css'

export default function MyList () {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [openRemoveTab, setOpenRemoveTab] = useState(false)
  const [selectedIds, setSelectedIds] = useState([])
  const [showToast, setShowToast] = useState(false)
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get('https://www.namava.ir/api/v2.0/post-groups/1263/medias?pi=1&ps=20')
      const dataArray = response?.data?.result
      setData(dataArray)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(data)

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

  if ((data.length) === 0 && !isLoading) return <EmptyState />
  if (isLoading || data.length === 0) return <LoadingLottie />
  return (
    <div className='myList'>
      {<Toast showToast={showToast} />}
      {!openRemoveTab ? 
        <DefaultHeader
          data={data}
          setData={setData}
          setOpenRemoveTab={setOpenRemoveTab} /> :
        <RemoveHeader
          data={data}
          setData={setData}
          setOpenRemoveTab={setOpenRemoveTab}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds} />
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
    </div>
  )
}

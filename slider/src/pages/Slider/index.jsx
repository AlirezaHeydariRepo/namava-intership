import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import './style.css'
import Slide from '../../components/Slide'

export default function Slider() {
  const [data, setData] = useState([])
  const [indexOfCurrItem, setIndexOfCurrItem] = useState(0)
  const timeoutRef = useRef(null)

  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.namava.ir/api/v2.0/medias/sliders/1316')
      const dataObj = response.data.result
      setData(dataObj)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  // console.log(data)
  
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setIndexOfCurrItem(prev => prev === (data.length - 1) ? 0 : prev + 1)
      }, 3000)
      return () => clearTimeout(timeoutRef.current)
    }
  }, [indexOfCurrItem, data.length])


  console.log(indexOfCurrItem)
  if (!data.length) return <div>loading</div>
  // console.log([{...data[0]}])
  
  return (
    <div className="slider-container">
      {data.length > 0 && (
        <>
          {data.map((item, index) => 
          {
            // console.log(index === indexOfCurrItem ? 'active' : '', item)
            return (<div
              key={item?.id}
              className={`${index === indexOfCurrItem ? 'activeSlide' : 'inactiveSlide'}`}
            >
              <Slide
                coverLandscape={item?.coverLandscape}
                logo={item?.logoImageUrl}
                caption={item?.caption}
                imdb={item?.imdb}
                trailer={item?.trailerVideoUrl}
                currIndex={indexOfCurrItem}
                setIndexOfCurrItem={setIndexOfCurrItem}
                ageRange={item?.ageRange?.value}
                dataLength={data.length}
              />
            </div>)}
          )}
        </>
      )}
    </div>
  )
}
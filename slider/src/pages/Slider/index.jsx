import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import './style.css'
import Slide from '../../components/Slide'
import TrailerModal from '../../components/TrailerModal/index'
import { Player } from '@lottiefiles/react-lottie-player'
import loadingLottie from '../../lotties/loading.json'

export default function Slider() {
  const [data, setData] = useState([])
  const [indexOfCurrItem, setIndexOfCurrItem] = useState(0)
  const [isOpen, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const timeoutRef = useRef(null)


  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://www.namava.ir/api/v2.0/medias/sliders/1316')
      const dataObj = response.data.result
      setData(dataObj)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data.length > 0 && !isOpen) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setIndexOfCurrItem(prev => prev === (data.length - 1) ? 0 : prev + 1)
      }, 3000)
      return () => clearTimeout(timeoutRef.current)
    }
  }, [indexOfCurrItem, data.length, isOpen])


  return (
    <div className="slider-container">
      {loading &&
        <Player
          autoplay
          loop
          src={loadingLottie}
          style={{ 
            height: '300px', 
            width: '300px', 
            paddingTop: '50px'
          }}
        >
        </Player>
      }
      {isOpen && (
        <TrailerModal
          trailerVideoUrl={data[indexOfCurrItem]?.trailerVideoUrl} // Access trailer URL from current item
          isOpen={isOpen}
          setOpen={setOpen}
        />
      )}
      {data.length > 0 && (
        <>
          {data.map((item, index) => 
          {
            return (
              <div
                key={item?.id}
                className={`${index === indexOfCurrItem ? 'activeSlide' : 'inactiveSlide'}`}
              >
                <Slide
                  coverLandscape={item?.coverLandscape}
                  logo={item?.logoImageUrl}
                  caption={item?.caption}
                  imdb={item?.imdb}
                  trailerVideoUrl={item?.trailerVideoUrl}
                  currIndex={indexOfCurrItem}
                  setIndexOfCurrItem={setIndexOfCurrItem}
                  ageRange={item?.ageRange?.value}
                  dataLength={data.length}
                  isOpen={isOpen}
                  setOpen={setOpen}
                />
              </div>)
          })}
        </>
      )}
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import Slide from '../../components/Slide'

export default function  Slider () {
  const [data, setData] = useState([])

  const fetchData = () => {
    axios.get('https://www.namava.ir/api/v2.0/medias/sliders/1316')
      .then(response => {
        const dataObj = response.data.result
        setData(dataObj)
      })
  }
  console.log(data)
  
  useEffect(() => {
    fetchData()
  }, [])

  let item = {} 
  // eslint-disable-next-line no-unused-vars
  const sliderFunction = setTimeout(() => {
  }, 6000
  )

  
  return (
    <div>
      <Slide
        key={item.id} 
        coverLandscape={item.coverLandscape} 
        logo={item.logoImageUrl} 
        caption={item.caption}
        imdb={item.imdb}
        trailer={item.trailerVideoUrl}
      />
    </div>
  )
}

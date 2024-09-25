/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../../ui/Card'
import './style.css'
import { Waypoint } from 'react-waypoint'
import { Player } from '@lottiefiles/react-lottie-player'
import loadingLottie from '../../../lottie/cardLoading.json'

export default function SearchResult (props) {
  const { data, page, totalPages, setPage, loading, fethcData, type, query } = props
  // console.log(data)

  const loadMoreData = () => {
    console.log('load more')
    // console.log('totalPages', totalPages)
    // console.log('page', page)
    // console.log('waypoint', page)
    const currPage = page + 1
    console.log(currPage, 'currPage')
    fethcData(type, query, currPage)
    setPage(currPage)
  }

  console.log(page < totalPages, loading, totalPages, page)

  return (
    <div className='search-result'>
      {
        data.map((e) => {
          return (
            <Card
              key={e.id}
              name={e.name}
              imageUrl={e.image_url}
              url={e.url}
              loading={loading} />
          )
        })
      }
      {loading && (
        <Player
          className='lootie'
          autoplay
          loop
          src={loadingLottie}
          style={{ borderRadius: '6px', margin: '0px' }}
        />
      )
      }
      {(page < totalPages) && (
        <Waypoint onEnter={loadMoreData} bottomOffset={'-30%'}/>)
      }
    </div>
  )
}

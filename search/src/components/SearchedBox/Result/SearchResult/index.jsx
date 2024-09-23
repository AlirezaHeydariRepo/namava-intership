/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../../../ui/Card'
import './style.css'
import { Waypoint } from 'react-waypoint'

export default function SearchResult (props) {
  const { data, page, totalPages, setPage, loading, fethcData, type, query } = props
  // console.log(data)

  const loadMoreData = () => {
    if (page < totalPages && !loading) {
      console.log('totalPages', totalPages)

      // console.log('waypoint', page)
      const currPage = page + 1
      fethcData(type, query, currPage)
      setPage(currPage)
    }
  }

  return (
    <div className='search-result'>
      {
        data.map((e) => {
          return (
            <Card key={e.id} name={e.name} imageUrl={e.image_url} url={e.url} />
          )
        })
      }
      {(page < totalPages && !loading) && (
        <Waypoint onEnter={loadMoreData} bottomOffset='40%' />)
      }
    </div>
  )
}

import React, { useState } from 'react'
import './style.css'
import Comment from '../Comment'
import { Player } from '@lottiefiles/react-lottie-player'
import loading from '../../lotties/loading.json'

export default function Comments (props) {
  const { data, fetchData, fetchMore, isLoading } = props

  const [page, setPage] = useState(1)

  const handleMoreComments = () => {
    const currPage = page + 1
    fetchData(currPage)
    setPage(currPage)
  }

  return (
    <div className='container'>
      {data.map((item) => {
        return (
          <Comment key={item.id} item={item}/>
        )
      })}
      {fetchMore &&
      <div className='moreComments' onClick={handleMoreComments}>
        {isLoading
          ? <Player className='loadingLottie' autoplay loop src={loading}/>
          : <span className='moreBtn'>بیشتر</span>}
      </div>}
    </div>
  )
}

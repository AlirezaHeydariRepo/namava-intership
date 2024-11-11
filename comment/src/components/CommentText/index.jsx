import React from 'react'
import './style.css'
import Like from '../Like'
import Dislike from '../Dislike'

export default function CommentText (props) {
  const { text, like, dislike } = props

  const toPersianNumber = (number) => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    return number?.toString().replace(/\d/g, (digit) => persianNumbers[digit])
  }

  return (
    <div className='commentText'>
      <p className="text">{text}</p>
      <div className="likeAndDislike">
        <Like toPersianNumber={toPersianNumber} like={like}/>
        <Dislike toPersianNumber={toPersianNumber} dislike={dislike}/>
      </div>
    </div>
  )
}

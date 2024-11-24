import React, { useState } from 'react'
import './style.css'
import Like from '../Like'
import Dislike from '../Dislike'

export default function CommentText (props) {
  const { text, like, dislike } = props
  const [active, setActive] = useState('None')

  const handleLikeDislike = (curr) => {
    console.log(active)
    if (active === 'None') {
      setActive(curr)
    } else if (active === curr) {
      setActive('None')
    } else {
      setActive(curr)
    }
  }

  const toPersianNumber = (number) => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    return number?.toString().replace(/\d/g, (digit) => persianNumbers[digit])
  }

  return (
    <div className='commentText'>
      <p className="text">{text}</p>
      <div className="likeAndDislike">
        <Like
          toPersianNumber={toPersianNumber}
          active={active}
          like={like}
          handleLikeDislike={handleLikeDislike}
        />
        <Dislike
          toPersianNumber={toPersianNumber}
          active={active}
          dislike={dislike}
          handleLikeDislike={handleLikeDislike}
        />
      </div>
    </div>
  )
}

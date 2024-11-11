import React, { useState } from 'react'
import SpoiledComment from '../SpoiledComment'
import avatar from '../../assets/img/avatar.svg'
import moment from 'jalali-moment'
import CommentText from '../CommentText'
import './style.css'

export default function Comment (props) {
  const { item } = props
  const [spoil, setSpoil] = useState(item?.flag)

  const handleSpoil = () => {
    setSpoil('None')
  }

  const UTCDateToLocalDate = (date) => {
    const isoTimestamp = date
    const momentObj = moment(isoTimestamp, 'YYYY/MM/DD').locale('fa')
    const year = momentObj.format('YYYY')
    const day = momentObj.format('D')
    const dayOfWeek = momentObj.format('dddd')
    const month = momentObj.format('MMMM')
    return dayOfWeek + ' ' + convertEnglishToPersianNumbers(day) + ' ' + month + ' ' + convertEnglishToPersianNumbers(year)
  }

  function convertEnglishToPersianNumbers (str) {
    const englishNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    for (let i = 0; i < 10; i++) {
      str = str.replace(englishNumbers[i].toString(), persianNumbers[i])
    }
    return str
  }

  return (
    <div className="comment">
      <div className="profileInfo">
        <img
          className="avatar"
          src={item?.profileAvatar ? `https://static.namava.ir${item.profileAvatar}` : avatar}
          alt="avatar"
        />
        <span className="userName">{item?.profileCaption}</span>
        <span>{`- ${item?.createDateUTC ? UTCDateToLocalDate(item?.createDateUTC) : ''}`}</span>
      </div>
      <div className="commentContent" onClick={handleSpoil}>
        {
          (spoil === 'Spoiled')
            ? <SpoiledComment />
            : <CommentText
              text={item?.body}
              like={item?.commentLikeDislike?.likeCount}
              dislike={item?.commentLikeDislike?.dislikeCount}
            />
        }
      </div>
    </div>
  )
}

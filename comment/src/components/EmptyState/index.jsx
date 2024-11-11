import React from 'react'
import './style.css'
import commentIcon from '../../assets/img/commentIcon.svg'

export default function EmptyState (props) {
  // eslint-disable-next-line no-unused-vars
  const { data } = props
  // console.log(data)

  return (
    <div className='emptyState'>
      <img src={commentIcon} alt="commentIcon" className="emptyStateIcon" />
      <div className="text">هنوز نظری ثبت نشده.</div>
      <div className="text">اولین نفری باشید که نظر خود را ثبت می کند.</div>
    </div>
  )
}

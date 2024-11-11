import React from 'react'
import './style.css'
import commentIcon from '../../assets/img/commentIcon.svg'

export default function LoginBox () {
  return (
    <div className='loginBox'>
      <div className="boxTitle">
        <img src={commentIcon} alt="commentIcon" className="titleIcon" />
        <span className="titleText">برای ثبت نظر ابتدا وارد شوید.</span>
      </div>
      <div className="links">
        <a href="https://www.namava.ir/auth/register" className='signin'>ثبت نام</a>
        <a href="https://www.namava.ir/auth/login" className='login'>ورود</a>
      </div>
    </div>
  )
}

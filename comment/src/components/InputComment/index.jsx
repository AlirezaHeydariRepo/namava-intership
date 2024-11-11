import React, { useState } from 'react'
import './style.css'
import avatar from '../../assets/img/avatar.svg'
import send from '../../assets/img/send.svg'
import activeSend from '../../assets/img/activeSend.svg'
import CheckBox from '../CheckBox'

export default function InputComment (props) {
  const { setData } = props
  const [spoil, setSpoil] = useState(false)
  const [currInput, setCurrInput] = useState('')

  const createDateUTC = () => {
    let currDate = new Date().toISOString()
    currDate = currDate.split('-').join('').split(':').join('').split('.').join('')
    return currDate
  }

  const sendComment = () => {
    if (currInput) {
      const newComment = {
        body: currInput,
        commentLikeDislike: {
          dislikeCount: 0,
          likeCount: 0
        },
        createDateUTC: createDateUTC(),
        flag: spoil === true ? 'Spoiled' : 'None',
        id: createDateUTC(),
        profileAvatar: null,
        profileCaption: 'test'
      }
      setData(prev => [newComment, ...prev])
      // console.log(data)
    } else {
      console.log('please write comment')
    }
  }

  return (
    <div className='inputComment'>
      <h3 className='title'>نظرات کاربران</h3>
      <div className="inputWrapper">
        <img className='avatar' src={avatar} alt="avatar" />
        <input
          className='input'
          type="text"
          placeholder='نظراتان درباره این فیلم چیست؟'
          onChange={(e) => setCurrInput(e.target.value)}
        />
        <img
          className='sendButton'
          src={currInput ? activeSend : send}
          alt="sendButton"
          onClick={sendComment}
        />
      </div>
      <CheckBox setSpoil={setSpoil}/>
    </div>
  )
}

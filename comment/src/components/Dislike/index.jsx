// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import dislikeIcon from '../../assets/img/dislike.svg'
import { Player } from '@lottiefiles/react-lottie-player'
import dislikeActive from '../../lotties/dislikeActive.json'
import dislikeInactive from '../../lotties/dislikeInactive.json'

export default function Dislike (props) {
  const { toPersianNumber, dislike, handleLikeDislike, active } = props
  const [isFirstRender, setIsFirstRender] = useState(true)
  const lottieRef = useRef(null)

  useEffect(() => {
    setIsFirstRender(false)
    lottieRef.current.setPlayerDirection(active === 'dislike' ? 1 : -1)
  }, [active])

  return (
    <div className="dislike">
      <div className='icon' onClick={() => handleLikeDislike('dislike')}>
        <Player
          ref={lottieRef}
          autoplay={!isFirstRender}
          className='lootie'
          loop={false}
          keepLastFrame={true}
          direction={1}
          src={(active === 'dislike') ? dislikeActive : dislikeInactive}
          style={{ borderRadius: '6px', margin: '0px' }}
        />
        <img src={dislikeIcon} alt="dislike"/>
      </div>
      <span className='dislikeCount'>{toPersianNumber(dislike + (active === 'dislike' ? 1 : 0))}</span>
    </div>
  )
}

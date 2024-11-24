// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef, act } from 'react'
import './style.css'
import likeIcon from '../../assets/img/like.svg'
import { Player } from '@lottiefiles/react-lottie-player'
import likeActive from '../../lotties/likeActive.json'
import likeInactive from '../../lotties/likeInactive.json'

// let isMounted = false

export default function Like (props) {
  const { toPersianNumber, like, handleLikeDislike, active } = props
  const [isFirstRender, setIsFirstRender] = useState(true)
  const lottieRef = useRef(null)

  useEffect(() => {
    setIsFirstRender(false)
    lottieRef.current.setPlayerDirection(active === 'like' ? 1 : -1)
  }, [active])

  // console.log(active)

  return (
    <div className="like">
      <div className='icon' onClick={() => handleLikeDislike('like')}>
        <Player
          ref={lottieRef}
          autoplay={!isFirstRender}
          className='lootie'
          loop={false}
          keepLastFrame={true}
          direction={1}
          src={(active === 'like') ? likeActive : likeInactive}
          style={{ borderRadius: '6px', margin: '0px' }}
        />
        <img src={likeIcon} alt="like"/>
      </div>
      <span className='likeCount'>{toPersianNumber(like + (active === 'like' ? 1 : 0))}</span>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import likeIcon from '../../assets/img/like.svg'
import { Player } from '@lottiefiles/react-lottie-player'
import likeActive from '../../lotties/likeActive.json'
import likeInactive from '../../lotties/likeInactive.json'

// let isMounted = false

export default function Like (props) {
  const { toPersianNumber, like } = props
  const [active, setActive] = useState(false)
  const [currLike, setCurrLike] = useState(like)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const lottieRef = useRef(null)

  const handleLike = () => {
    setActive(prev => !prev)
    setCurrLike(active ? currLike - 1 : currLike + 1)
  }
  useEffect(() => {
    setIsFirstRender(false)
    lottieRef.current.setPlayerDirection(active ? 1 : -1)
  }, [active])

  return (
    <div className="like">
      <div className='icon' onClick={handleLike}>
        <Player
          ref={lottieRef}
          autoplay={!isFirstRender}
          className='lootie'
          loop={false}
          keepLastFrame={true}
          direction={1}
          src={(isFirstRender ? !active : active) ? likeActive : likeInactive}
          style={{ borderRadius: '6px', margin: '0px' }}
        />
        <img src={likeIcon} alt="like"/>
      </div>
      <span className='likeCount'>{toPersianNumber(currLike)}</span>
    </div>
  )
}

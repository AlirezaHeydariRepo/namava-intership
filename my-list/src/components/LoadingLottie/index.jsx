import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import loading from '../../lottie/loading.json'
  
export default function LoadingLottie() {
  return (
    <div className="lottie">
      <Player
        autoplay
        loop
        src={loading} 
        style={{ 
          height: '300px', 
          width: '300px', 
          paddingTop: '50px'
        }}
      >
      </Player>
    </div>
  )
}

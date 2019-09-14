
import React from 'react'
import { Progress } from "react95"

import './style.css'

const ThirdPage = (props) => {
  const { stepNext, stepPrevious } = props

  return (
    <div>
      <Progress percent={25} />
      <div className="welcome">Prove it..</div>
      <div className="welcome">What's your cats name?</div>
      <div className="questionContainer">
        
      </div>
    </div>
  )
}

export {
  ThirdPage
}

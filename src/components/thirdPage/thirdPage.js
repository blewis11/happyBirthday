
import React from 'react'

import './style.css'

const ThirdPage = (props) => {
  const { stepNext, stepPrevious } = props

  return (
    <div>
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

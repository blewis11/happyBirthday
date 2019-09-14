
import React from 'react'
import { Button } from "react95";

import './style.css'

const SecondPage = (props) => {
  const { stepNext, stepPrevious } = props

  return (
    <div>
      <div className="welcome">Are You Lisis?</div>
      <div className="buttonsContainer">
        <Button onClick={stepPrevious} fullWidth={true}>No</Button>
        <Button onClick={stepNext} fullWidth={true}>Yes</Button>
      </div>
    </div>
  )
}

export {
  SecondPage
}

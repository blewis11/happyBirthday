import React from 'react'
import { compose } from 'recompose'

import { Button } from 'react95'

import './style.css'

const AreYouSure =
  compose(
   
)((props) => {
  const { stepNext, stepPrevious } = props

  return (
    <div>
        <div className='welcome'>Ok well does it FEEL like your birthday? 🤔</div>
        <div className='buttonsCenter'>
            <div className="buttonsContainer">
              <Button onClick={stepNext} fullWidth={true}>Yes</Button>
              <Button onClick={stepNext} fullWidth={true}>Always</Button>
            </div>
        </div>
    </div>
  )
})

export {
  AreYouSure
}

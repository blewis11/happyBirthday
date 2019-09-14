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
        <div>Ok well does it feel like your birthday?</div>
        <div className='buttonsCenter'>
            <div className="buttonsContainer">
              <Button onClick={stepPrevious} fullWidth={true}>No</Button>
              <Button onClick={stepNext} fullWidth={true}>Yes</Button>
            </div>
        </div>
    </div>
  )
})

export {
  AreYouSure
}

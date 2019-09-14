import React from 'react'
import { compose, withHandlers } from 'recompose'

import { Button } from 'react95'

import './style.css'

const FourthPage =
  compose(
  withHandlers({
    gotoNotBirthday: ({setNotBirthday, stepNext}) => (event) => {
      setNotBirthday()
      stepNext()
    },
    gotoBirthday: ({stepNext}) => (event) => {
      stepNext()
    }
  })
)((props) => {
  const { stepNext, gotoNotBirthday } = props

  return (
    <div>
        <div className="welcome">Correct ✨</div>
        <div className="welcome">Is it your birthday today?</div>
          <div className='buttonsCenter'>
            <div className="buttonsContainer">
              <Button onClick={gotoNotBirthday} fullWidth={true}>No</Button>
              <Button onClick={stepNext} fullWidth={true}>Yes</Button>
            </div>
        </div>
    </div>
  )
})

export {
  FourthPage
}

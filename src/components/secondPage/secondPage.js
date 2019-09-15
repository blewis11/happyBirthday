
import React from 'react'
import { compose, withHandlers } from 'recompose'

import { Button } from "react95";

import './style.css'

const SecondPage = compose(
  withHandlers({
    gotoNext: ({stepNext, setLoading}) => {
      setLoading(true)
      setTimeout(function () {
        stepNext()
        setLoading(false)
      }, 1300)
    },
    wrongPerson: ({ createError }) => {
      createError(true, 'Sorry, this site isn\'t for you :(')
    }
  })
)((props) => {
  const { gotoNext, wrongPerson } = props

  return (
    <div>
      <div className="welcome">Are You Lisis?</div>
      <div className='buttonsCenter'>
        <div className="buttonsContainer">
          <Button onClick={wrongPerson} fullWidth={true}>No</Button>
          <Button onClick={gotoNext} fullWidth={true}>Yes</Button>
        </div>
      </div>
    </div>
  )
})

export {
  SecondPage
}

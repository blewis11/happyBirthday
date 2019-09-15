import React from 'react'
import { compose, withHandlers } from 'recompose'

import { Button } from 'react95'

import './style.css'

const FourthPage =
  compose(
  withHandlers({
    gotoNotBirthday: ({setNotBirthday, setLoading}) => (event) => {
      setLoading(true)
      setTimeout(function () {
        setNotBirthday()
        setLoading(false)
      }, 1500)
    },
    gotoBirthday: ({stepNext, loadPanda, setLoading }) => (event) => {
      loadPanda(true)
      setLoading(true)
      setTimeout(function () {
        stepNext()
        setLoading(false)
      }, 2000)
    }
  })
)((props) => {
  const { gotoBirthday, gotoNotBirthday } = props

  return (
    <div>
        <div className="welcome">Correct ✨</div>
        <div className="welcome">Is it your birthday today?</div>
          <div className='buttonsCenter'>
            <div className="buttonsContainer">
              <Button onClick={gotoNotBirthday} fullWidth={true}>No</Button>
              <Button onClick={gotoBirthday} fullWidth={true}>Yes</Button>
            </div>
        </div>
    </div>
  )
})

export {
  FourthPage
}

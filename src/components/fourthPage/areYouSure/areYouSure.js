import React from 'react'
import { compose, withHandlers } from 'recompose'

import { Button } from 'react95'

import './style.css'

const AreYouSure =
  compose(
    withHandlers({
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
  const { gotoBirthday } = props

  return (
    <div>
        <div className='welcome'>Ok well does it FEEL like your birthday? 🤔</div>
        <div className='buttonsCenter'>
            <div className="buttonsContainer">
              <Button onClick={gotoBirthday} fullWidth={true}>Yes</Button>
              <Button onClick={gotoBirthday} fullWidth={true}>Always</Button>
            </div>
        </div>
    </div>
  )
})

export {
  AreYouSure
}

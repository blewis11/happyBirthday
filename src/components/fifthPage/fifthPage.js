import React from 'react'
import { compose, withHandlers } from 'recompose'

import { Button } from 'react95'

import './style.css'

const FifthPage =
  compose(
  withHandlers({
    gotoNext: ({stepNext, setLoading}) => {
      setLoading(true)
      setTimeout(function () {
        stepNext()
        setLoading(false)
      }, 2000)
    }
  })
)((props) => {
  const { gotoNext } = props
 
  return (
    <div>
        <div className="welcome">Happy Birthday!!</div>
        <div>I made this little site for you, I hope you like it :)</div>
        <div className="buttonContainer">
          <Button onClick={gotoNext}> 🎂 Go 🎂</Button>
        </div>
    </div>
  )
})

export {
  FifthPage
}

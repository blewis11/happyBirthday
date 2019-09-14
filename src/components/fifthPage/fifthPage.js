import React from 'react'
import { compose } from 'recompose'

import { Button } from 'react95'

import './style.css'

const FifthPage =
  compose(
   
)((props) => {
  const { stepNext, stepPrevious } = props
 
  return (
    <div>
        <div className="welcome">Happy Birthday!!</div>
        <div>I made this little site for you, I hope you like it :)</div>
        <div className="buttonContainer">
          <Button > 🎂 Go 🎂</Button>
        </div>
    </div>
  )
})

export {
  FifthPage
}

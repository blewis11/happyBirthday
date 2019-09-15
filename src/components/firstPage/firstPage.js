
import React from 'react'
import { compose, withHandlers } from 'recompose'
import { Button } from "react95";

const FirstPage = compose(
  withHandlers({
    gotoNext: ({stepNext, setLoading}) => {
      setLoading(true)
      setTimeout(function () {
        stepNext()
        setLoading(false)
      }, 1000)
    }
  })
)((props) => {
  const { gotoNext } = props

  return (
    <div>
      <div className="welcome">Welcome</div>
      <Button size='lg' onClick={gotoNext}>Click to Proceed</Button>
    </div>
  )
})

export {
  FirstPage
}

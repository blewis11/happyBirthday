
import React from 'react'
import { Button } from "react95";

const FirstPage = (props) => {
  const { stepNext } = props

  return (
    <div>
      <div className="welcome">Welcome</div>
      <Button size='lg' onClick={stepNext}>Click to Proceed</Button>
    </div>
  )
}

export {
  FirstPage
}

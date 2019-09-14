
import React from 'react'
import { withHandlers, withState, compose } from 'recompose'
import { TextField, Button } from 'react95'

import './style.css'

const CORRECT_ANSWER = 'baco'

const ThirdPage =
  compose(
    withState('answer', 'setAnswer', ''),
    withHandlers({
    onChangeAnswer: ({setAnswer}) => (event) => {
      const input = event.target.value
      setAnswer(input)
    },
    submitAnswer: ({answer, stepNext, stepPrevious}) => (event) => {
      if (answer.toLowerCase() === CORRECT_ANSWER){
        stepNext()
      } else {
        stepPrevious()
      }
    }
  }),
)((props) => {
  const { onChangeAnswer, submitAnswer} = props

  return (
    <div>
      <div className="welcome">Security Question:</div>
      <div className="welcome">What's your sons name?</div>
      <div className="questionContainer">
        <TextField onChange={onChangeAnswer}/>
        <div className="submitButton">
          <Button onClick={submitAnswer}>Submit</Button>
        </div>
      </div>
    </div>
  )
})

export {
  ThirdPage
}

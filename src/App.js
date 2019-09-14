import React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderComponent } from 'recompose'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { reset, themes, Progress, Hourglass } from "react95"
import { contains } from 'ramda'

import { increaseStep, decreaseStep } from './actions/stepActions'

import { FirstPage } from './components/firstPage/firstPage'
import { SecondPage } from './components/secondPage/secondPage'
import { ThirdPage } from './components/thirdPage/thirdPage'

import './App.css'

const STEPS_WITH_PROGRESS_BAR = [1,2,3,4]

const ResetStyles = createGlobalStyle`
  ${reset}
`

const Loading = () => {
  return (
    <div className="loader">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <div className="hourglassContainer">
          <Hourglass size={32}/>
        </div>
      </ThemeProvider>
    </div>
  )
}

function App(props) {
  const { stepNext, stepPrevious, simpleReducer: { step, totalSteps } } = props

  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <div>
          <div className='progressBarContainer'>
            { 
              contains(step, STEPS_WITH_PROGRESS_BAR) &&
              <Progress percent={((step-1) / totalSteps) * 100} />
            }
          </div>

          <div className="introSequenceContainer">
            { 
              step === 0  &&
              <FirstPage stepNext={stepNext}/>
            }
            { 
              step === 1  &&
              <SecondPage 
                stepNext={stepNext }
                stepPrevious={stepPrevious} 
              />
            }
            { 
              step === 2  &&
              <ThirdPage 
                stepNext={stepNext } 
                stepPrevious={stepPrevious}
              />
            }
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default compose(
  connect(
    (state) => ({
      ...state
    }),
    (dispatch) => ({
      stepNext: () => dispatch(increaseStep()),
      stepPrevious: () => dispatch(decreaseStep())
    })
  ),
  branch(
    ({simpleReducer: {loading}}) => loading,
    renderComponent(Loading)
  )
)(App)

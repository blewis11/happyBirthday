import React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderComponent } from 'recompose'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { reset, themes, Progress, Hourglass } from "react95"
import { contains } from 'ramda'

import { increaseStep, decreaseStep, setNotBirthday } from './actions/stepActions'

import { FirstPage } from './components/firstPage/firstPage'
import { SecondPage } from './components/secondPage/secondPage'
import { ThirdPage } from './components/thirdPage/thirdPage'
import { FourthPage } from './components/fourthPage/fourthPage'
import { AreYouSure } from './components/fourthPage/areYouSure/areYouSure'
import { FifthPage } from './components/fifthPage/fifthPage'

import './App.css'

const STEPS_WITH_PROGRESS_BAR = [1,2,3,4]

const ResetStyles = createGlobalStyle`
  ${reset}
`

const Loading = () => {
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <div className="hourglassContainer">
          <Hourglass size={32}/>
        </div>
      </ThemeProvider>
    </div>
  )
}

const Error = (props) => {
  const { errorMessage } = props

  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <div>{errorMessage}</div>
      </ThemeProvider>
    </div>
  )
}

function App(props) {
  const { 
    stepNext, 
    stepPrevious, 
    toggleNotBirthday, 
    simpleReducer: { 
      step, 
      totalSteps, 
      notBirthday, 
      error,
      errorMessage 
    }
  } = props

  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <div>
          <div className='progressBarContainer'>
            { 
              contains(step, STEPS_WITH_PROGRESS_BAR) &&
              <Progress percent={((step) / totalSteps) * 100} />
            }
          </div>

          <div className="introSequenceContainer">
            {
              error && 
              <Error errorMessage={errorMessage} />
            }
            { 
              step === 0  && !error &&
              <FirstPage stepNext={stepNext}/>
            }
            { 
              step === 1  && !error &&
              <SecondPage 
                stepNext={stepNext}
                stepPrevious={stepPrevious} 
              />
            }
            { 
              step === 2  && !error &&
              <ThirdPage 
                stepNext={stepNext} 
                stepPrevious={stepPrevious}
              />
            }
            {
              step === 3 && !notBirthday && !error &&
              <FourthPage 
                stepNext={stepNext}
                stepPrevious={stepPrevious}
                setNotBirthday={toggleNotBirthday}
              />
            }
            {
              step === 3 && notBirthday && !error &&
              <AreYouSure 
                stepNext={stepNext}
                stepPrevious={stepPrevious}
              />
            }
            {
              step === 4 && !error &&
              <FifthPage 
                stepNext={stepNext}
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
      stepPrevious: () => dispatch(decreaseStep()),
      toggleNotBirthday: () => dispatch(setNotBirthday())
    })
  ),
  branch(
    ({simpleReducer: {loading}}) => loading,
    renderComponent(Loading)
  )
)(App)

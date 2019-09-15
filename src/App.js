import React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderComponent } from 'recompose'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { reset, themes, Progress, Hourglass, Button } from "react95"
import { contains } from 'ramda'

import panda from './media/panda.gif'

import { 
  increaseStep, 
  decreaseStep, 
  setNotBirthday, 
  toggleLoading,
  setLoadingPanda,
  setError,
  stepTo
} from './actions/stepActions'

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

const Loading = (props) => {
  const { loadingPanda  } = props

  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <div className="hourglassContainer">
          { !loadingPanda && 
            <Hourglass size={32}/>
          }
          { loadingPanda && 
            <img width='100px' height='100px' src={panda}/>
          }
        </div>
      </ThemeProvider>
    </div>
  )
}

const Error = (props) => {
  const { errorMessage, gotoStep, createError } = props
  
  const onClick = () => {
    gotoStep(0)
    createError(false, '')
  }

  return (
    <div>
      <div className="welcome">{errorMessage}</div>
      <Button onClick={onClick}>Go Back</Button>
    </div>
  )
}

function App(props) {
  const { 
    stepNext, 
    stepPrevious, 
    toggleNotBirthday, 
    setLoading,
    loadPanda,
    createError,
    gotoStep,
    simpleReducer: { 
      step, 
      totalSteps, 
      notBirthday, 
      error,
      errorMessage,
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
              <Error 
                errorMessage={errorMessage}
                gotoStep={gotoStep}
                createError={createError}
              />
            }
            { 
              step === 0  && !error &&
              <FirstPage 
                stepNext={stepNext}
                setLoading={setLoading}
              />
            }
            { 
              step === 1  && !error &&
              <SecondPage 
                stepNext={stepNext}
                setLoading={setLoading}
                createError={createError}
              />
            }
            { 
              step === 2  && !error &&
              <ThirdPage 
                stepNext={stepNext} 
                stepPrevious={stepPrevious}
                setLoading={setLoading}
                createError={createError}
              />
            }
            {
              step === 3 && !notBirthday && !error &&
              <FourthPage 
                stepNext={stepNext}
                stepPrevious={stepPrevious}
                setNotBirthday={toggleNotBirthday}
                setLoading={setLoading}
                loadPanda={loadPanda}
              />
            }
            {
              step === 3 && notBirthday && !error &&
              <AreYouSure 
                stepNext={stepNext}
                stepPrevious={stepPrevious}
                setLoading={setLoading}
                loadPanda={loadPanda}
              />
            }
            {
              step === 4 && !error &&
              <FifthPage 
                stepNext={stepNext}
                stepPrevious={stepPrevious}
                setLoading={setLoading}
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
      toggleNotBirthday: () => dispatch(setNotBirthday()),
      setLoading: (loading) => dispatch(toggleLoading(loading)),
      loadPanda: (showPanda) => dispatch(setLoadingPanda(showPanda)),
      createError: (isError, errorMessage) => dispatch(setError(isError, errorMessage)),
      gotoStep: (step) => dispatch(stepTo(step))
    })
  ),
  branch(
    ({simpleReducer: {loading}}) => loading,
    renderComponent(({simpleReducer: { loadingPanda }}) => <Loading loadingPanda={loadingPanda} />)
  )
)(App)

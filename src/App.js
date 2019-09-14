import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { reset, themes } from "react95"

import { increaseStep, decreaseStep } from './actions/stepActions'

import { FirstPage } from './components/firstPage/firstPage'
import { SecondPage } from './components/secondPage/secondPage'
import { ThirdPage } from './components/thirdPage/thirdPage'

import './App.css'

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App(props) {
  const { stepNext, stepPrevious, simpleReducer: { step } } = props
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
          <div className="introSequenceContainer">
            { step === 0  &&
              <FirstPage stepNext={stepNext}/>
            }
            { step === 1  &&
              <SecondPage stepNext={stepNext } stepPrevious={stepPrevious} />
            }
            { step === 2  &&
              <ThirdPage stepNext={stepNext } stepPrevious={stepPrevious} />
            }
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
  )
)(App)

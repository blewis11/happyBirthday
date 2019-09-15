export const increaseStep = () => dispatch => {
  dispatch({
   type: 'INCREASE_STEP',
   payload: null
  })
 }

export const decreaseStep = () => dispatch => {
  dispatch({
    type: 'DECREASE_STEP',
    payload: null
  })
}

export const stepTo = (step) => dispatch => {
  dispatch({
    type: 'STEP_TO',
    payload: step
  })
}

export const toggleLoading = (loading) => dispatch => {
  dispatch({
    type: 'TOGGLE_LOADING',
    payload: loading
  })
}

export const setLoadingPanda = (loadPanda) => dispatch => {
  dispatch({
    type: 'LOADING_PANDA',
    payload: loadPanda
  })
}

export const setNotBirthday = () => dispatch => {
  dispatch({
    type: 'NOT_BIRTHDAY',
    payload: null
  })
}

export const setError = (isError, errorMessage) => dispatch => {
  dispatch({
    type: 'SET_ERROR',
    payload: {
      isError,
      errorMessage
    }
  })
}

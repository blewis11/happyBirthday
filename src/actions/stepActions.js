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

export const toggleLoading = () => dispatch => {
  console.log('dispatching')
  dispatch({
    type: 'TOGGLE_LOADING',
    loading: true
  })
}

export const setNotBirthday = () => dispatch => {
  dispatch({
    type: 'NOT_BIRTHDAY',
    payload: null
  })
}

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

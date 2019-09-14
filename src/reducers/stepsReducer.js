import { INITIAL_STATE } from '../utilities/constants'

const reducer = (state = INITIAL_STATE, action) => {
  const { step } = state

  switch (action.type) {
   case 'INCREASE_STEP':    
    return {
     ...state,
     step: step + 1
    }
  
    case 'DECREASE_STEP':      
      return {
        ...state,
        step: step - 1
      }
    default:
    return state
  }
 }

 export default reducer

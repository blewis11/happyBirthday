import { INITIAL_STATE } from '../utilities/constants'

const reducer = (state = INITIAL_STATE, action) => {
  const { step } = state
  const { payload } = action

  switch (action.type) {
   case 'INCREASE_STEP':    
    return {
     ...state,
     step: step + 1,
    }
  
    case 'DECREASE_STEP':      
      return {
        ...state,
        step: step - 1
      }
    
    case 'STEP_TO':
      return {
        ...state,
        step: payload
      }

    case 'TOGGLE_LOADING':
      return {
        ...state,
        loading: payload
      }
    
    case 'NOT_BIRTHDAY':
      return {
        ...state,
        notBirthday: true
      }
    
    case 'LOADING_PANDA':
      return {
        ...state,
        loadingPanda: payload
      }
    
    case 'SET_ERROR':
      return {
        ...state,
        error: payload.isError,
        errorMessage: payload.errorMessage
      }
    default:
    return state
  }
 }

 export default reducer

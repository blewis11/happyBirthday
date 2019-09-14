import { INITIAL_STATE } from '../utilities/constants'

const reducer = (state = INITIAL_STATE, action) => {
  const { step, } = state

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
    
    case 'TOGGLE_LOADING':
      console.log('receiving')
      return {
        ...state,
        loading: action.loading
      }
    
    case 'NOT_BIRTHDAY':
      return {
        ...state,
        notBirthday: true
      }
    
    default:
    return state
  }
 }

 export default reducer

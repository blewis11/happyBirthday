import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

import { INITIAL_STATE } from './utilities/constants'

export default function configureStore(initialState=INITIAL_STATE) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}

export {
  INITIAL_STATE
}

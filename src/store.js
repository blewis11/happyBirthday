import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

import { INITIAL_STATE } from './utilities/constants'

export default function configureStore(persistedState=INITIAL_STATE) {
 return createStore(
   rootReducer,
   persistedState,
   applyMiddleware(thunk)
 );
}

export {
  INITIAL_STATE
}

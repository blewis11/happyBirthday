import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './App'

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const store = configureStore(persistedState)

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById('root')
)

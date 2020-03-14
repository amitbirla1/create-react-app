import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import apiMiddleware from '../middleware/apiMiddleware'


const configureStore = preloadedState => createStore(
  rootCallReducer,
  preloadedState,
  applyMiddleware(thunk, apiMiddleware)
)

export default configureStore
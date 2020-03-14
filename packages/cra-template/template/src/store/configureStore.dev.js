import { createStore, applyMiddleware, compose ,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import apiMiddleware from '../middleware/apiMiddleware'
import { appReducer } from '../reducers/appReducer'

export const reducers = combineReducers({
	appReducer
});


const configureStore = preloadedState => {
  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(thunk, apiMiddleware, logger)
      //DevTools.instrument()
    )
  )
  return store
}

export default configureStore
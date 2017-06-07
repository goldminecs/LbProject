import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'


import rootReducer from '../reducers/rootReducer'

const logger = createLogger({predicate: (getState, action) => __DEV__})

function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
  const store = createStoreWithMiddleware(rootReducer)
  return store
}

export const store = configureStore()

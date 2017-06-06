import {combineReducers} from 'redux'

import configReducer from './configReducer'
import messageReducer from './messageReducer'

const rootReducers = combineReducers({
  CONFIG: configReducer,
  MESSAGE: messageReducer,
})

const rootReducersWrapper = (state, action) => {
  action.rootState = state
  if (action.error) {
    return {
      ...state
    }
  } else {
    return rootReducers(state, action)
  }
}

export default rootReducersWrapper
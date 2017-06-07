import {combineReducers} from 'redux'

import homeReducer from './homeReducer'
import meReducer from './meReducer'

const rootReducers = combineReducers({
  HOME: homeReducer,
  ME: meReducer,
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
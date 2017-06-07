import {Home} from '../models/HomeModels';

const initStat = Home();

export default function homeReducer(state = initStat, action) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return handleTitle(state, action)
    default:
      return state
  }
}

function handleTitle(state, action) {
  let payload = action.payload
  console.log('home reducer:type=' + payload.type + '|title=' + payload.title)

  state = state.set('title', payload.title)
  return state
}

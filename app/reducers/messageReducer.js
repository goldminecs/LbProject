import {Message} from '../models/MessageModels';

const initStat = Message();

export default function messageReducer(state = initStat, action) {
  switch (action.type) {
    case '1':
      return handle1(state, action)
    default:
      return state
  }
}

function handle1(state, action) {
  let payload = action.payload
  let data = payload.data
  state = state.set('data', data)
  return state
}

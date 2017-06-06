
export default function configReducer(state, action) {
  switch (action.type) {
    case '1':
      return handle1(state, action)
    default:
      return state
  }
}

function handle1(state = initStat, action) {
  let payload = action.payload
  let data = payload.data
  state = state.set('data', data)
  return state
}
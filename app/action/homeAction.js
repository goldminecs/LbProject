
import {createAction} from 'redux-actions'

export function fetchTitle(payload) {
  return (dispatch ,getState) => {
    let updateTitleAction = createAction('UPDATE_TITLE')
    dispatch(updateTitleAction({type: payload.type, title: 'title data'}))
  }
}
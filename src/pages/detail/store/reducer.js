
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '',
  content: '' 
})

export default (state = defaultState, action) => {
  console.log(action)
  if (action.type === actionTypes.Get_Article_Detail) {
    return state.merge({
      title: action.title,
      content: action.content
    })
  }
  return state
}

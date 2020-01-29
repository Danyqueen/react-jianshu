import * as actionTypes from './actionTypes'
// fromJS：将js对象转换为Immutable对象，使其不可改变
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // 使用Immutable对象时的用法,immutable对象的set方法
    // 会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focused', true)
    // return {
    //   focused: true
    // }
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
    // return {
    //   focused: false
    // }
  }
  return state
}

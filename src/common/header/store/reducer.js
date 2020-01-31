import * as actionTypes from './actionTypes'
// fromJS：将js对象转换为Immutable对象，使其不可改变
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: [],
  totalPage: 1,
  page: 1,
  mouseIn: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
    // 使用Immutable对象时的用法,immutable对象的set方法
    // 会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused', true)
      // return {
      //   focused: true
      // }
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.PAGE_CHANGE:
      return state.set('page', action.data)
    default:
      return state
  }
}

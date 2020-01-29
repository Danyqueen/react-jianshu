/**
 * Todolist部分 start
 */
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM,  DELETE_TODO_ITEM} from './actionTypes'

// const defaultState = {
//   inputValue: '123',
//   list: [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ]
// }

// /**
//  * reducer可以接收state，但不能改变state，因此要先复制一份newState
//  * @param { state : store仓库中存储的数据 }
//  */
// export default (state = defaultState, action) => {
//   if (action.type === CHANGE_INPUT_VALUE) {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.inputValue = action.value
//     return newState
//   }
//   if (action.type === ADD_TODO_ITEM) {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.list.push(newState.inputValue)
//     newState.inputValue = ''
//     return newState
//   }
//   if (action.type === DELETE_TODO_ITEM) {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.list.splice(action.index, 1)
//     return newState
//   }
//   return state
// }

/**
 * Todolist部分 end
 */


 /**
  * 简书项目部分  start
  */
// import { combineReducers } from 'redux'
// 从redux-immutable中引入的是immutable对象:注意看7.9,7.10
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store';

export default combineReducers({
  header: headerReducer
})
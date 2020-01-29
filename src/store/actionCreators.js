// 所有action统一创建，增强代码可维护性
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM,  DELETE_TODO_ITEM} from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
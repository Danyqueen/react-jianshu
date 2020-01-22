// 创建store
import { createStore } from 'redux'
// 将reducer传递过来，放入函数中创建store
import reducer from './reducer'

const store = createStore(
  reducer,
  // 如果浏览器安装了redux-devtools，就打开redux-devtools调试
  window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

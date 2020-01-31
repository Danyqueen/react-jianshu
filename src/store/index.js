// 创建store
import { createStore, compose, applyMiddleware } from 'redux'
// 将reducer传递过来，放入函数中创建store
import reducer from './reducer'
import thunk from 'redux-thunk'

// 如果浏览器安装了redux-devtools，就打开redux-devtools调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  // 用reducer创建store的基础数据
  reducer,
  composeEnhancers(
    // 使用redux的中间件：redux-thunk
    applyMiddleware(thunk)
  )
 )

export default store

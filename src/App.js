import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import { GlobalStyled } from './style'
import { GlobalIonfont } from './statics/iconfont/iconfont'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <div>
      <GlobalStyled />
      <GlobalIonfont />
      {/* 使用provider来应用store */}
      <Provider store={store}>
        <BrowserRouter>
          <div>            
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

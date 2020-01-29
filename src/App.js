import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Header from './common/header'
import { GlobalStyled } from './style'
import { GlobalIonfont } from './statics/iconfont/iconfont'

function App() {
  return (
    <div>
      <GlobalStyled />
      <GlobalIonfont />
      {/* 使用provider来应用store */}
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;

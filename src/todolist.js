import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
// 会自动去找store中的index.js
import store from './store'
import { getInputChangeAction, addItemAction, deleteItemAction } from './store/actionCreators'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    // 改变this指向
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // store仓库里的数据发生改变时，this.handleStoreChange会自动被执行
    store.subscribe(this.handleStoreChange)
  }

  render () {
    return (
      <div style={{margin: '50px auto', width: '500px'}}>
        <div>
          <Input value={this.state.inputValue}
            placeholder='todo info'
            style={{marginRight: '10px',}}
            onChange={this.handleInputChange}
            onKeyUp={this.handleBtnClick}
          />
          {/* <Button type='primary'
            onClick={this.handleBtnClick}
          >提交</Button> */}
        </div>
        <List
          style={{marginTop: '10px', width: '500px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item style={{position: 'relative'}}>
              {item}
              <Button
                style={{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)'}}
                type="danger" onClick={this.handleDelete.bind(this, index)}>删除
              </Button>
            </List.Item>
          )}
        />
      </div>
    )
  }

  componentDidMount () {
    axios.get('/list.json').then(res => {
      console.log(res)
    })
  }

  handleInputChange (e) {
    // 创建与redux中store通信的action
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange () {
    // 组件页面的数据更新为最新数据，联动
    this.setState(store.getState())
  }

  handleBtnClick(e) {
    if (e.keyCode !== 13) {
      return
    }
    const action = addItemAction()
    store.dispatch(action)
  }

  handleDelete (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList
import { connect } from 'react-redux'
import { actionCreators } from './store'
import React, { Component } from 'react'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img width='625px' height='270px' alt=''
            src='http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
        </HomeRight>
        <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getTopicList()
		window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

/**
 * 将store里的数据映射到props来获取
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  return {
    // 本来可以这样写
    // focused: state.header.focused
    // 使用immutable.js时要用get 
    // focused: state.get(header).get('focused')
    topicList: state.getIn(['header', 'topicList'])
  }
}

/**
 * @param {即为store.dispatch} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    getTopicList() {
      dispatch(actionCreators.getTopicList(dispatch))
    },
    changeScrollTopShow() {
      // dispatch()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


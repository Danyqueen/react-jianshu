import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addtion,
  Button
} from './style'
// import { Button } from 'antd'
// 无状态组件的性能比较高，如果没有state参数，直接写成无状态组件即可
function Header(props) {
  return (
    <div>
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames='slide'> 
              <NavSearch
                className={props.focused ? 'focused': ''}
                onFocus={props.handleInputFucus}
                onBlur={props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe70b;</i>
          </SearchWrapper>
        </Nav>
        {/* 附加信息 */}
        <Addtion>
          <Button>注册</Button>
          <Button className='write'>
            <i className='iconfont'>&#xe62d;</i>
            写文章</Button>
        </Addtion>
      </HeaderWrapper>    
    </div>
  )
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
    focused: state.getIn(['header', 'focused'])
  }
}

/**
 * @param {即为store.dispatch} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFucus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

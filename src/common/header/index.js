import React, { Component } from 'react'
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addtion,
  Button
} from './style'
// import { Button } from 'antd'
// 无状态组件的性能比较高，如果没有state参数，直接写成无状态组件即可
// 当组件很庞大时，每个函数都需要传值，比较麻烦，因此还是用正常组件合适
class Header extends Component {
  render() {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props
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
                in={focused}
                timeout={200}
                classNames='slide'> 
                <NavSearch
                  className={focused ? 'focused': ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe70b;</i>
              {this.getListArea()}
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

  getListArea() {
    const { list, page, totalPage, focused, mouseIn, handleMouseEnter, handleMouseLeave, handleSwitchInfo } = this.props
    const JSList = list.toJS()
    let itemList = []
    if (JSList.length > 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        itemList.push(<SearchInfoItem key={JSList[i]}>{JSList[i]}</SearchInfoItem>)
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleSwitchInfo(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe62c;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {itemList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
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
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

/**
 * @param {即为store.dispatch} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getSearchInfoList(dispatch))
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleSwitchInfo(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
      originAngle = Number(originAngle) + 360
      spinIcon.style.transform = `rotate(${originAngle}deg)`
      if (page < totalPage) {
        return dispatch(actionCreators.pageChange(++page))
      }
      dispatch(actionCreators.pageChange(1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

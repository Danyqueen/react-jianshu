// Header组件的样式
import styled from 'styled-components'
// 不能直接在下面引入，webpack打包后目录会不一样，因此用导入方式
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  // 注意此行
  background-size: contain;
`
export const Nav = styled.div`
  width: 790px;
  height: 56px;
  margin: 0 auto;
`
export const NavItem = styled.div`
  padding: 0 15px;
  margin-right: 10px;
  line-height: 56px;
  font-size: 16px;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left
  }
  &.right {
    float: right
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    color: #aaa;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 260px;
  padding: 10px;
  color: #999;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`
export const SearchInfoTitle = styled.div`
  font-size: 14px;
  padding: 10px;
`

export const SearchInfoSwitch = styled.span`
  cursor: pointer;
  float: right;
  font-size: 14px;
  .spin {
    display: block;
    float: left;
    margin: 0 5px;
		transition: all .2s ease-in;
		transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin: 5px;
  padding: 5px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const Addtion = styled.div`
  line-height: 56px;
  position: absolute;
  right: 0;
  top: 0;
`
export const Button = styled.button`
  font-size: 15px;
  margin: 10px;
  padding: 9px 20px;
  height: 38px;
  margin: 9px;
  color: rgba(236,97,73,.7);
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 19px;
  background: none;
  &.write {
    color: #fff;
    background: #ea6f5e;
  }
`
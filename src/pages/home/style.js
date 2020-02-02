import styled from 'styled-components'

export const HomeWrapper = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  width: 960px;
  height: 100%;
  box-sizing: border-box;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  width: 625px;
  margin-right: 15px;
  float: left;
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  margin: 10px 0 10px -15px;
  overflow: hidden;
`

export const TopicItem = styled.div`
  width: 98px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding-right: 10px;
  margin: 0 15px;
  float: left;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  img {
    display: block;
    float: left;
    margin-right: 10px;
  }
`

export const ListWrapper = styled.div`
  margin: 20px 0;
  border-top: 1px solid #dcdcdc;
`

export const ListItem = styled.div`
  cursor: pointer;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
`

export const ListItemTitle = styled.div`
  color: #555;
  font-size: 18px;
  font-weight: bold;
`

export const ListItemContent= styled.div`
  color: #9c9c9c;
  line-height: 20px;
  font-size: 13px;
  margin: 10px 0;
  text-decoration: none !important;
`

export const LoadMore = styled.div`
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  background: #a5a5a5;
  margin: 30px 0;
  border-radius: 20px;
`

export const BackTop = styled.div`
  cursor: pointer;
  position: fixed;
  right: 100px;
  bottom: 80px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
`
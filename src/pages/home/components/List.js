import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ListWrapper,
  ListItem,
  ListItemTitle,
  ListItemContent,
  LoadMore
} from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    const { articleList, getMoreData, page } = this.props
    return (
      <ListWrapper>
        {
          articleList.map((item, index) => {
            return (
              <Link key={index} to={`/detail/${item.get('id')}`}>              
                <ListItem>
                  <ListItemTitle>
                    {item.get('title')}
                  </ListItemTitle>
                  <ListItemContent>
                    {item.get('desc')}
                  </ListItemContent>
                </ListItem>
              </Link>
            )
          })
        }
      <LoadMore onClick={() => getMoreData(page)}>更多文字</LoadMore>
      </ListWrapper>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'page'])
})

const mapDispatch = (dispatch) => {
  return {
    getMoreData(page) {
      dispatch(actionCreators.getMoreData(page))
    }
  }
}

export default connect(mapState, mapDispatch)(List)
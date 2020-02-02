import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const getTopicListAction = (data) => ({
  type: actionTypes.GET_TOPIC_LIST,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})

const getMoreDataAction = (data, page) => ({
  type: actionTypes.GET_MORE_DATA,
  list: fromJS(data),
  page
})

export const getTopicList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const data = res.data
      dispatch(getTopicListAction(data.data))
    })
  }
}

export const getMoreData = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then(res => {
      const data = res.data
      dispatch(getMoreDataAction(data.data, ++page))
    })
  }
}
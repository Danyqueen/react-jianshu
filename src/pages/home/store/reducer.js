import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  page: 1
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_TOPIC_LIST:
      return state.merge({
        'topicList': action.topicList,
        'articleList': action.articleList,
        'recommendList': action.recommendList
      })
    case actionTypes.GET_MORE_DATA:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'page': action.page
      })
    default:
      return state
  }
}
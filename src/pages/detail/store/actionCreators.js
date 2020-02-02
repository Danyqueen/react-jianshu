import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const articleDetailAction = (data) => ({
  type: actionTypes.Get_Article_Detail,
  title: fromJS(data.title),
  content: fromJS(data.content)
})

export const getArticleDetail = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      const data = res.data
      console.log(data)
      dispatch(articleDetailAction(data.data))
    })
  }
}

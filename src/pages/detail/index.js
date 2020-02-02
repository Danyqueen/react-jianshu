import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  DetailWrapper
} from './style'
import { actionCreators } from './store'

class Detail extends Component {
  render() {
    const { title, content } = this.props
    console.log(title)
    return (
      <DetailWrapper>
        <p className='title'>{title}</p>
        <p className='content'>{content}</p>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getArticleDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => {
  return {
    getArticleDetail(id) {
      dispatch(actionCreators.getArticleDetail(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Detail);
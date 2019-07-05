import React from 'react'
import { connect } from 'react-redux'
import { getColors } from '../actions'

class SuitContainer extends React.Component {
  componentDidMount () {
    this.props.dispatch(getColors())
  }

  render () {
    return (
      <div className='column is-half svgContainer'>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(SuitContainer)

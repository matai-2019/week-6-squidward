import React from 'react'
import { connect } from 'react-redux'

class SuitContainer extends React.Component {
  render () {
    return (
      <div className='column is-half svgContainer' align='center'>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(SuitContainer)

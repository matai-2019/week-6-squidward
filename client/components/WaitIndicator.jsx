import React from 'react'
import { connect } from 'react-redux'

const WaitIndicator = (props) => {
  return <img src='./waiting.png' />
}

const mapStateToProps = (state) => {
  return {
    isWaiting: state.isWaiting
  }
}

export default connect(mapStateToProps)(WaitIndicator)

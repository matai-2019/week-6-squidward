import React from 'react'
import { connect } from 'react-redux'

const WaitIndicator = (props) => {
  const style = {
    visibility: props.isWaiting ? 'visible' : 'hidden'
  }
  return <img style={style} src='./waiting.png' />
}

const mapStateToProps = (state) => {
  return {
    isWaiting: state.isWaiting
  }
}

export default connect(mapStateToProps)(WaitIndicator)

import React from 'react'
import { connect } from 'react-redux'

import WaitIndicator from './WaitIndicator'
import Jacket from './Jacket'
import Shirt from './Shirt'
import Tie from './Tie'
import Trousers from './Trousers'
import Shoes from './Shoes'
import SuitContainer from './SuitContainer'
import Buttons from './Buttons'

import { getColors } from '../actions'

const size = '600px'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      jacket: '#ff33bb',
      shirt: '#222222',
      tie: '#55bb22',
      trousers: '#00ff00',
      shoes: '#ffffff'
    }
  }

  darkenColour = (colour) => {
    const bitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let tempColour = [colour.slice(1, 3), colour.slice(3, 5), colour.slice(5, 7)]
    tempColour = tempColour.map(bit => {
      let bitIndex = bitArray.indexOf(bit[0])
      bitIndex = (bitIndex === 0) ? bitIndex : bitIndex - 1
      return (bitArray[bitIndex] + bit[1])
    })
    tempColour = '#' + tempColour[0] + tempColour[1] + tempColour[2]
    return tempColour
  }

  randomColor = key => () => {
    const { colorArr } = this.props
    const i = Math.floor((Math.random() * colorArr.length))
    const newState = {}
    newState[key] = colorArr[i]

    this.setState(
      newState
    )
  }

  componentDidMount () {
    this.props.dispatch(getColors())
  }

  render () {
    const { jacket,
      shirt,
      tie,
      trousers,
      shoes } = this.state
    return (
      <>
        <h1 style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }} className="title is-1" >Wardrobe Dilemma</h1>
        <div className="row is-flex">
          {this.props.isWaiting ? <WaitIndicator /> : <>
            <SuitContainer>
              <Jacket darkenColour={this.darkenColour} size={size} colour={jacket} />
              <Shirt darkenColour={this.darkenColour} size={size} colour={shirt} />
              <Tie darkenColour={this.darkenColour} size={size} colour={tie} />
              <Trousers size={size} darkenColour={this.darkenColour} colour={trousers} />
              <Shoes darkenColour={this.darkenColour} size={size} colour={shoes} />
            </SuitContainer>
            <Buttons randomColor={this.randomColor} />
          </>
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    colorArr: state.colorArr,
    isWaiting: state.isWaiting
  }
}

export default connect(mapStateToProps)(App)

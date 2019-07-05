import React from 'react'
import Jacket from './Jacket'
import Shirt from './Shirt'
import Tie from './Tie'
import Pants from './Pants'
import Shoes from './Shoes'
import data from '../../data/colors'
const { colors } = data
const colour = '#116611'

class App extends React.Component {
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

  randomColor = () => {
    const i = Math.floor((Math.random() * colors.length))
    return colors[i]
  }

  render () {
    return (
      <>
        <h1>Wardrobe Dilema</h1>
        <Jacket darkenColour={this.darkenColour} colour={colour}/>
        <Shirt darkenColour={this.darkenColour} colour={colour} />
        <Tie darkenColour={this.darkenColour} colour={colour} />
        <Pants colour={colour}darkenColour={this.darkenColour}/>
        <Shoes darkenColour={this.darkenColour} colour={colour} />
      </>
    )
  }
}

export default App

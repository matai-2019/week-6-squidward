import React from 'react'
import data from '../../data/colors'
import SuitContainer from './SuitContainer'
const { colors } = data

class App extends React.Component {

  randomColor = () => {
    const i = Math.floor((Math.random() * colors.length))
    return colors[i]
  }

  render () {
    return (
    <>
    <h1>Wardrobe Dilema</h1>
    <SuitContainer />
    </>
    )
  }
}

export default App

import React from 'react'
import data from '../../data/colors'
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
    </>
    )
  }
}

export default App

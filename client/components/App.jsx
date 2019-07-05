import React from 'react'
import Jacket from './Jacket'
import Shirt from './Shirt'
import Tie from './Tie'
import Trousers from './Trousers'
import Shoes from './Shoes'

class App extends React.Component {
  render () {
    return (
      <>
      <h1>SUIT-UP MOFO</h1>
      <Jacket />
      <Shirt />
      <Tie />
      <Trousers />
      <Shoes />
      </>
    )
  }
}

export default App

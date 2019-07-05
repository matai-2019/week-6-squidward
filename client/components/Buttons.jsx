import React from 'react'

export default function Buttons (props) {
  const handleSuit = () => {
    const i = Math.floor((Math.random() * 15))
    props.randomColor('jacket', i)()
    props.randomColor('trousers', i)()
  }

  return (
    <div className="column is-half">
      <div className="container controller">
        <h2 style={{ display: 'flex', justifyContent: 'center' }} className="title is-4">Click buttons to select random colors</h2>
        <button className='button is-success' onClick={props.randomColor('jacket')} name="Jacket">Jacket</button>
        <button className='button is-success' onClick={props.randomColor('shirt')} name="Shirt">Shirt</button>
        <button className='button is-success' onClick={ props.randomColor('tie')} name="Tie">Tie</button>
        <button className='button is-success' onClick={ props.randomColor('trousers')} name="Trousers">Trousers</button>
        <button className='button is-success' onClick={ props.randomColor('shoes')} name="Shoes">Shoes</button>
        <button className='button is-success' onClick={handleSuit} name='Suit'>Suit</button>
      </div>
    </div>
  )
}

import React from 'react'

export default function Buttons () {
  return (
    <div className="column is-half">
      <div className="container controller">
        <button className='button is-success' onClick={() => console.log('Jacket')} name="Jacket">Jacket</button>
        <button className='button is-success' onClick={() => console.log('Shirt')} name="Shirt">Shirt</button>
        <button className='button is-success' onClick={() => console.log('Tie')} name="Tie">Tie</button>
        <button className='button is-success' onClick={() => console.log('Trousers')} name="Trousers">Trousers</button>
        <button className='button is-success' onClick={() => console.log('Shoes')} name="Shoes">Shoes</button>
      </div>
    </div>
  )
}

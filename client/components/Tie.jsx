import React from 'react'

export default function Tie ({ colour, darkenColour, size }) {
  return <>
    <svg width={size} height={size} version="1.1" viewBox="0 0 564 564" xmlns="http://www.w3.org/2000/svg">
      <g fill={colour} stroke="#000" strokeWidth="1px">
        <path d="m279.5 38.167 6.8333 0.16667 3.6667 5.8333-2.1667 8 7.1667 43.667-11.167 50.5-12-51.5 7.3333-42.5-3.3333-7.5z" />
        <path d="m279.17 52.333 8.6667-0.16667z" />
        <path d="m279.17 52.333 8.6667-0.16667z" />
      </g>
    </svg>
  </>
}

import React from 'react'

export default function Jacket ({ colour, darkenColour, size }) {
  return <>
    <svg width={size} height={size} version="1.1" viewBox="0 0 564 564" xmlns="http://www.w3.org/2000/svg">
      <g>
        <g fill={colour} stroke="#000" strokeWidth="1px">
          <path d="m187.88 261.5h23.25v4.875h-23.125z" />
          <path d="m356.44 260.88h23v5.625h-23z" />
          <path d="m266 30.875 36.5-0.375z" />
          <path d="m260 38.875 11.833 55.958 11.333 51.167 11.833-50.167 12.125-58.958-4.625-6.375c-39.761 0-32.679 0.375-36.5 0.375z" />
          <path d="m286.33 38.333 11.417 15.667 7.75-19.375-3-4.125z" />
          <path d="m279.5 38.167-9.5 16.958-8.5-18.375 4.5-5.875z" />
          <path d="m279.5 38.167 6 4.5v90.833l-2.3333 12.5-3.3333-14.167z" />
          <path d="m286.33 38.333-3.1667 2.3333z" />
        </g>
      </g>
    </svg>

  </>
}

import React from 'react'

export default function Trousers ({ colour, darkenColour, size }) {
  const shaded = darkenColour(colour)
  const darker = darkenColour(shaded)
  return <>
    <svg width={size} height={size} version="1.1" viewBox="0 0 564 564" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#000" strokeWidth="1px">
        <path fill={colour} d="m226.43 283.61 2.7092 96.642-0.51776 50.863-0.0486 56.066-0.20178 37.796 12.63 9.4516 5.4732-252.51z" />
        <path fill={darker} d="m332.91 535.32 15.845-7.6841-4.7982-104.8-1.2627-80.812-0.25254-59.094-21.971 3.0305" />
        <path fill={shaded} d="m241 534.43 3.4529-141.14 2.0203-111.37 37.099-43.13 36.895 47.17 5.3033 91.671 7.1359 157.69-20.745-5.2525-3.0585-60.01-9.694-111.22-11.551-66.482-6.6071 0.35713-8.0081 65.215-11.24 172.38z" />
      </g>
    </svg>
  </>
}

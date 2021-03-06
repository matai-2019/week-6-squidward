import React from 'react'

export default function Jacket ({ colour, darkenColour, size }) {
  const shaded = darkenColour(colour)
  const darker = darkenColour(shaded)
  return <>
    <svg width={size} height={size} version="1.1" viewBox="0 0 564 564" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#000" strokeWidth="1px">
        {/* Normal paths */}
        <path fill={colour} d="m284 151.62-53.75-88.625 11.25-8-3-6.125 7.625-1.5 13-10.5 0.875 2 23.792 108.25z" />
        <path fill={colour} d="m238.5 48.875-31.714 11.018-7.5 33.571-7.5 40.536-8.0357 127.5h29.286l4.2857-71.786 7.6786-51.429 2.1429 11.071-0.17857 58.929-5.3572 14.107 4.6429 3.75-5 56.429 39.464 6.25 7.5-2.1429 6.0714-5.5357 4.8214-9.4643 4.1072-33.214-6.2143-73.589 6.9375-14.188-53.688-87.688 11.25-8z" />
        {/* Slight Shaded */}
        <path fill={shaded} d="m307.12 36.875 0.5625-1.3438 13.656 11.594 7.5938 1.75-2.875 6.1875 10.688 8-52.812 87.625-0.1458-3.5625z" />
        <path fill={shaded} d="m328.94 48.875 30.562 11.625 9 36.75 6.875 41 3.625 58.125 3.375 64.5h-28.625l-3.875-68.25-7.875-57-2.375 17v53.875l5 16.25-4.25 2.5 4.75 57.25-43.625 6-6.75-2.875-5.625-6.25-3-10.625-2.5-25.875-6.625-78 6.9375-14.188 52.812-87.625-10.688-8z" />
        {/* Shaded */}
        <path fill={darker} d="m324.64 47.036-5.5357 9.1071 11.607 8.2143-46.777 86.33 52.812-87.625-10.688-8 2.875-6.1875" />
        <path fill={darker} d="m242.5 48.286 4.2857 7.3214-12.143 8.75 49.295 86.33-53.688-87.688 11.25-8-3-6.125" />
        <path fill={darker} d="m342 135.62 3.9772-49.932 7.0711-19.445-5.5558 20.456-4.5457 54.801" />
        <path fill={darker} d="m225 138.29-3.9772-49.932-7.0711-19.445 5.5558 20.456 4.5457 54.801" />
        <path fill={darker} d="m221.61 222.39 21.335-1.4659 2.1466-7.5761 0.37881 11.112-19.217 1.6804z" />
        <path fill={darker} d="m345.02 221.5-21.335-1.4659-2.1466-7.5761-0.37881 11.112 19.217 1.6804z" />
      </g>
    </svg>
  </>
}

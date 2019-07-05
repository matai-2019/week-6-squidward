import React from 'react'
import { connect } from 'react-redux'

const SuitContainer = ({ children }) => {
  // const ref = useRef(null)

  // useEffect(() => {
  //   return () => {
  //     effect
  //   }
  // }, [input])

  return (
    <div className='column is-half svgContainer'>
      {children}
    </div>
  )
}

export default SuitContainer

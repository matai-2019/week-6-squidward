import { combineReducers } from 'redux'

import colorArr from './colorArr'
import isWaiting from './isWaiting'

export default combineReducers({
  colorArr,
  isWaiting
})

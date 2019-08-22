import { REQUESTING_COLORS, RECEIVING_COLORS } from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTING_COLORS:
      return true
    case RECEIVING_COLORS:
      return false
    default:
      return state
  }
}

export default reducer

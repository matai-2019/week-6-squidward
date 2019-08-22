import { RECEIVING_COLORS } from '../actions'
const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVING_COLORS:
      return action.colorArr
    default:
      return state
  }
}

export default reducer

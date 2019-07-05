import { GET_COLORS } from './actions'
const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLORS:
      return action.colors
    default:
      return state
  }
}

export default reducer

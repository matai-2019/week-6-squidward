import data from '../../data/colors'

export const GET_COLORS = 'GET_COLORS'
export const REQUESTING_COLORS = 'REQUESTING_COLORS'
export const RECEIVING_COLORS = 'RECEIVING_COLORS'

export const requestColors = () => {
  return {
    type: REQUESTING_COLORS
  }
}

export const receiveColors = colors => {
  return {
    type: RECEIVING_COLORS,
    colorArr: data.colors
  }
}

export const getColors = () => {
  console.log("WHY")
  return dispatch => {
    dispatch(requestColors())
    setTimeout(() => dispatch(receiveColors()), 3000)
  }
}

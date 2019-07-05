import data from '../../data/colors'

export const GET_COLORS = 'GET_COLORS'

export const getColors = () => {
  return {
    type: GET_COLORS,
    colorArr: data.colors
  }
}

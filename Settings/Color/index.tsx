export const changeColorReducer = (currState, newColor) => {
  return {
      ...currState,
      color: newColor
  }
}
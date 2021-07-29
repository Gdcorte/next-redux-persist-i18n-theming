export const changeColorReducer = (curr_state, newColor) =>{
    return {
        ...curr_state,
        color: newColor
    }
}
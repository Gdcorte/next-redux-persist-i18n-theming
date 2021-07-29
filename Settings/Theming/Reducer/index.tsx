export const changeThemeReducer = (curr_state, newTheme) =>{
    return {
        ...curr_state,
        theme: newTheme
    }
}


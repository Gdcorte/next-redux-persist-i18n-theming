export const CHANGE_THEME = "CHANGE_THEME";

//Action Creator
export const changeTheme = (theme) => ({
   type: CHANGE_THEME,
   theme: theme,
});

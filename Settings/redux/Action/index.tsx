export {changeTheme} from 'Settings/Theming/Action'
export {changeColor} from 'Settings/Color/Action'

export const CHANGE_LOAD_STATE = "CHANGE_LOAD_STATE";

export interface settingsActionInterface {
    type: string,
    theme?: string,
    color?: string,
    loading?: boolean,
}

export const changeLoadState = (loading:boolean) => ({
   type: CHANGE_LOAD_STATE,
   loading: loading,
});

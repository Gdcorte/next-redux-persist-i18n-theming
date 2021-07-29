import { CHANGE_THEME } from '../../Theming/Action'
import { CHANGE_COLOR } from '../../Color/Action'

import {changeThemeReducer} from '../../Theming/Reducer'
import {changeColorReducer} from '../../Color/Reducer'

import { 
    CHANGE_LOAD_STATE,
    settingsActionInterface,
} from '../Action'
import {SettingStoreInterface, settingsStoreInitial} from '../Store'

export const settingsReducer = (
    state: SettingStoreInterface = settingsStoreInitial, 
    action: settingsActionInterface
)=>{
    switch (action.type){
        case CHANGE_THEME:
            return changeThemeReducer(state, action.theme)
        case CHANGE_COLOR:           
            return changeColorReducer(state, action.color) 
        case CHANGE_LOAD_STATE:
            return changeLoadingReducer(state, action.loading)
        default: 
            return state
    }
}

const changeLoadingReducer = (currState, loading) =>{
    return {
        ...currState,
        loading
    }
}

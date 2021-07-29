import {settingsStoreInitial, SettingStoreInterface} from 'Settings/redux/Store'

export type storeType = {
    settings: SettingStoreInterface,
}

export const STORE_INITIAL_STATE = {
    settings: settingsStoreInitial,
}

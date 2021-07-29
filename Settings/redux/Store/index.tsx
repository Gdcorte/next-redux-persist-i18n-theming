
export interface SettingStoreInterface {
    theme: string,
    color: string,
    loading: boolean,
}

export const settingsStoreInitial:SettingStoreInterface = {
    color: 'green',
    theme: 'dark',
    loading: false,
}
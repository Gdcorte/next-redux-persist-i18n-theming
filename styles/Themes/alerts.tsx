import {BaseThemeColorsInterface} from './'

export interface AlertsInterface {
    danger: BaseThemeColorsInterface,
    success: BaseThemeColorsInterface,
    warning: BaseThemeColorsInterface,
    info: BaseThemeColorsInterface,
}

export const BaseAlerts: AlertsInterface = {
    danger: {
        main: '#ff4861',
        contrast: '#fefefe'
    },
    success: {
        main: '#4ce1b6',
        contrast: '#363537'
    },
    warning: {
        main: '#f6da6e',
        contrast: '#363537'
    },
    info: {
        main: '#70bbfd',
        contrast: '#fefefe'
    },
}


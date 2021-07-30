import {
    LightGreen, 
    // LightPink, LightBlue, LightYellow
} from './Light'

import { 
    DarkGreen, 
    // DarkPink, DarkYellow, DarkBlue 
} from './Dark'

import {
    AlertsInterface
} from './alerts'

import {
    ColorInterface
} from './colorSchemes'

export const getTheme = (themeName: string = ''): ThemeInterface => {
    let themeMap = {
        lightgreen: LightGreen,
        darkgreen: DarkGreen,
    }

    return themeMap[themeName] || DarkGreen
}

export interface ThemeInterface extends Partial<ColorInterface>, AlertsInterface {
    background:string,
    text:string,
    button:string,
    disabled: string,
    disabledText: string,
}



export interface BaseThemeColorsInterface {
    main: string,
    alternate?: string,
    contrast: string,
}

export interface PaletteInterface extends BaseThemeColorsInterface {

}


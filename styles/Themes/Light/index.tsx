import Pink from './Pink'
import Green from './Green'
import Blue from './Blue'
import Yellow from './Yellow'

import {ThemeInterface} from '../'
import {BaseAlerts} from '../alerts'

const mergedPrimary = {
    // pink: Pink.primary.text,
    green: Green.primary,
    // blue: Blue.primary.text,
    // yellow: Yellow.primary.text,
}

const Common:ThemeInterface = {
    ...BaseAlerts,
    background: '#fefefe',
    button: '#fefefe',
    text: '#303030',
    disabled:'#8F8E90',
    disabledText:'#eaeaea',
}

export const LightGreen = {
    ...Common,
    ...Green,
    mergedPrimary,
}

export const LightPink = {
    ...Common,
    ...Pink,
    mergedPrimary,
}

export const LightBlue = {
    ...Common,
    ...Blue,
    mergedPrimary,
}

export const LightYellow = {
    ...Common,
    ...Yellow,
    mergedPrimary,
}
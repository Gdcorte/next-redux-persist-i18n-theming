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
    background: '#363537',
    button: '#fefefe',
    text: '#fefefe',
    disabled:'#8F8E90',
    disabledText:'#eaeaea',
}

export const DarkGreen = {
    ...Common,
    ...Green,
    mergedPrimary,
}

export const DarkPink = {
    ...Common,
    ...Pink,
    mergedPrimary,
}

export const DarkBlue = {
    ...Common,
    ...Blue,
    mergedPrimary,
}

export const DarkYellow = {
    ...Common,
    ...Yellow,
    mergedPrimary,
}

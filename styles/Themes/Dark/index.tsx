import Green from './Green'

import {ThemeInterface} from '../'
import {BaseAlerts} from '../alerts'

const mergedPrimary = {
    green: Green.primary,
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


import Green from './Green'

import {ThemeInterface} from '../'
import {BaseAlerts} from '../alerts'

const mergedPrimary = {
    green: Green.primary,
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
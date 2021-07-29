import { ThemeProvider } from 'styled-components'
import {useSelector} from 'react-redux'
import {storeType} from '../redux/store'

import {getTheme} from '../styles/Themes'
import { useEffect, useState } from 'react'

const ThemedApp = ({ children }) => {

    const settings = useSelector( (state: storeType)  => state.settings )
    const [currentTheme, setcurrentTheme] = useState(getTheme())
    
    // Ensures our theme will update accordingly
    useEffect(() => {
        setcurrentTheme(
            getTheme(
                settings.theme + settings.color
            )
        )
    }, [settings.color, settings.theme])
    
    return (
        <ThemeProvider theme={ currentTheme }>
            {children}
        </ThemeProvider>
    )
}

export default ThemedApp



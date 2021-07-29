import {css} from 'styled-components'
import {ThemeInterface} from 'styles/Themes'

export const BaseButtonCss = css`
    :active{
        background-color: ${({
            theme
        }:{theme:ThemeInterface})=>
            theme.alternate
        };
        color: ${({
            theme
        }:{theme:ThemeInterface})=>
            theme.text
        };
        border: 2px solid ${({
            theme, variant,
        }:{theme:ThemeInterface, variant:string})=> 
            theme.text 
        };
    }

    :disabled{
        border: 2px solid ${({
            theme
        }:{theme:ThemeInterface})=>
            theme.disabled
        };
        background-color: ${({
            theme
        }:{theme:ThemeInterface})=>
            theme.disabled
        };
        color: ${({
            theme
        }:{theme:ThemeInterface})=>
            theme.disabledText
        };
    }
`
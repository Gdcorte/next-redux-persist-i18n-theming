import {css} from 'styled-components'
import {ThemeInterface} from 'styles/Themes'
import {BaseButtonCss} from './Base'

export const AlertButtonCss = css`
    background-color: ${({
        theme, variant,
    }:{theme:ThemeInterface, variant:string})=> 
        theme[variant].main 
    };
    color: ${({
        theme, variant,
    }:{theme:ThemeInterface, variant:string})=> 
        theme[variant].contrast 
    };
    min-width: fit-content;
    border-radius: 5px;
    border: 2px solid ${({
        theme, variant,
    }:{theme:ThemeInterface, variant:string})=> 
        theme[variant].main 
    };

    :hover{
        background-color: ${({
            theme,
        }:{theme:ThemeInterface, variant:string})=> 
            theme.background
        };
        color: ${({
            theme, variant,
        }:{theme:ThemeInterface, variant:string})=> 
            theme[variant].main 
        };
    }
    
    ${BaseButtonCss}
`
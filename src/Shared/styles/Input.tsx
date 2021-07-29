import {css} from 'styled-components'
import {ThemeInterface} from 'styles/Themes'

export const InputCss = css`
    border: 2px solid ${({
        theme
    }:{theme:ThemeInterface})=>
        theme.primary
    };

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

    border-radius: 5px;
    width: 100%;
    padding-left: 8px;


    :focus-visible{
        outline: none;
        border: 2px dotted ${({
            theme
        }:{theme:ThemeInterface})=>
            theme.primary
        };
    }

    :disabled{
        border:none;
    }
`
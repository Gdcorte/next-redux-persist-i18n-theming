import styled from 'styled-components'
import {ThemeInterface} from 'styles/Themes'

export const WrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid ${({
        theme
    }:{theme:ThemeInterface})=>
        theme.primary
    };
    border-radius: 50px;
    padding: 8px 40px;
    background-color: ${({
        theme
    }:{theme:ThemeInterface})=>
        theme.background
    };
    align-items:center;

    @media only screen and (min-width: 450px) {
        min-width: 450px;
    }

    @media only screen and (max-width: 350px) {
        max-width: 300px;
    }

`
export const ExternalWrapperStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    background-color: ${({
        theme
    }:{theme:ThemeInterface})=>{
        let color = theme.alternate
        return color
    }
    };
`

export const TitleStyled = styled.p`
    color: ${({
        theme
    }:{theme:ThemeInterface})=>
        theme.primary
    };
    font-size:24px;
`

export const TitleWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    border-top 2px solid ${({
        theme
    }:{theme:ThemeInterface})=>
        theme.primary
    };
    border-bottom: 2px solid ${({
        theme
    }:{theme:ThemeInterface})=>
        theme.primary
    };
    padding: 12px 0px;
    width: 100%;
`
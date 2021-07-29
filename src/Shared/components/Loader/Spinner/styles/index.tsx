import styled from 'styled-components'

export const SpinnerStyled = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    :after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid ${({theme})=>theme.primary.background};
        border-color: ${({theme})=>theme.primary.background} transparent ${({theme})=>theme.primary.background} transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const SpinnerContainer = styled.div`
    position: fixed;
    left: 0;
    top:0;
    width:100vw;
    height:100vh;
    z-index: 999;
    display:flex;
    justify-content:center;
    align-items:center;

    background-color: ${({theme})=>{ return (theme.default.background + theme.lightOpacity)}};
`

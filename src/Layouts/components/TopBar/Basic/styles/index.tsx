import styled from 'styled-components'

export const WrapperStyled = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 10px;
    align-items: center;
    
    @media only screen and (max-width: 400px){
        justify-content: center;
    }
`
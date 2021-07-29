import styled from 'styled-components'

export const ContainerStyled = styled.label`
    cursor: ${({pointer})=>  pointer ? 'pointer' : 'default' };
`

export const TitleStyled = styled.p`
    color: ${({theme, bold})=> bold ? theme.primary : theme.text};
    font-weight: ${({bold})=>  bold ? 'bold' : 'unset' };
    font-size:12px;
`
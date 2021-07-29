import styled from 'styled-components';

export const LabelStyled = styled.label`
    display: flex;
    align-items: center;
`

export const CaptionStyled = styled.p`
    color: ${({theme, bold})=> bold ? theme.primary : theme.text};
    font-size: 12px;
`

import styled from 'styled-components';
import { InputCss } from 'src/Shared/styles/Input'



export const InputStyled = styled.input`
    ${InputCss}
`

export const SpanStyled = styled.span`
    color: ${({ theme }) =>  theme.danger.text };
`
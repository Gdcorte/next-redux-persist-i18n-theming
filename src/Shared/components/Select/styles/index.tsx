import styled from 'styled-components';

import Select from 'react-select'

export const SelectStyled = styled(Select)`

    :hover{
        cursor:pointer;
    }
`
export const LabelStyled = styled.p`
    color: ${({theme}) => (theme.primary.text)};
`
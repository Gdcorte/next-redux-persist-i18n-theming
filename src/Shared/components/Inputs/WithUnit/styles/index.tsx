import styled from 'styled-components';

export const ContainerStyled = styled.div`
    display: flex;
    margin: 4px 0px;
`

export const UnitStyled = styled.p`
    color: ${({ theme }) =>  theme.text };
    margin-left: 8px;
    min-width: 20px;
`
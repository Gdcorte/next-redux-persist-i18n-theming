import styled from 'styled-components';

export const ColoringStyled = styled.div`
    background-color: ${({ theme, overrideColor }) => overrideColor || theme.primary};
    padding: 16px;
    border-radius: 50px;
    margin: 4px;
`

import styled from 'styled-components';

export const WrapperStyled = styled.div`
    display: flex;
    position: relative;
`

export const InputStyled = styled.input`
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.primary.background};
    width: 100%;
    padding-left: 8px;
    color: ${({ theme }) =>  theme.primary.text };

    :focus-visible{
        outline: none;
        border:2px dotted ${({ theme }) => theme.primary.background};
    }
`

export const IconStyled = styled.div`
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 8px;
    right: 0;
    top: 0;
    bottom: 0;
    vertical-align: middle;
    border-style: none;
`

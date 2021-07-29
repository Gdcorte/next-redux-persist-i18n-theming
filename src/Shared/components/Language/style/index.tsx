import { Dropdown } from 'react-bootstrap'

import styled from 'styled-components';
import {motion} from 'framer-motion'

export const TextVariants = {
    expanded: {
        opacity: 1,
        display: "flex",
        transition: {
            duration: 0.3,
        }
    },
    collapsed: {
        opacity: 0,
        transitionEnd: {
            display: "none"
        },
        transition:{
            duration: 0.3
        }
    }
};

export const ParagraphStyled = styled(motion.p)`
    visibility: ${({compact}) => compact ? 'hidden' : 'initial'};
    width: ${({compact}) => compact ? '0px' : '100%'};
    transition: width 0.8s, visibility 0.5s;

    @media only screen and (max-width:400px) {
        visibility: hidden;
        width:0px;
    }
`

export const DropDownStyled = styled(Dropdown)`
    margin: 4px;
`

export const DropDownItemStyled = styled(Dropdown.Item)`
    justify-content:center;
    display: flex;
    padding: 0.5rem 1rem;
`

export const DropDownToggleStyled = styled(Dropdown.Toggle)`
    border: none;
    background-color: inherit !important;
    color:${({ theme }) => theme.text} !important;
    border: 2px solid ${({ theme }) => theme.background} !important;
    font-size: inherit; 
    border-radius: 50px;

    :hover{
        background-color: ${({ theme }) => theme.alternate} !important;
        border: 2px solid ${({ theme }) => theme.primary} !important;
        border: none;
    }

    :focus{
        box-shadow: none !important;
    }
`

export const DropDownMenuStyled = styled(Dropdown.Menu)`
    min-width: 0px;
    inset: 1px auto auto ${({compact}) => compact ? '0rem' : '1rem'} !important;
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.background};

    @media only screen and (max-width: 400px){
        inset: 1px auto auto 0rem !important;
    }
`
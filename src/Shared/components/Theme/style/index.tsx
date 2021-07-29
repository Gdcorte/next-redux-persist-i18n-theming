import styled from 'styled-components';
import {motion} from 'framer-motion'

export const ToggleStyled = styled.div`
    padding:0.5rem;
    margin: 4px;
    width: max-content;
    border: none;
    background-color: inherit;
    color:${({ theme }) => theme.primary.text};
    border-radius: 50px;

    :hover{
        background-color: ${({ theme }) => theme.secondary.background };
        color: ${({ theme }) => theme.secondary.text};
        border: none;
    }
`

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
    transition: width 0.8s, visibility 0.5s;

    @media only screen and (max-width:400px) {
        visibility: hidden;
        width:0px;
    }
`


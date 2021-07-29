import styled from 'styled-components'

import DateTime from 'react-datetime'

import {InputCss} from 'src/Shared/styles/Input'

export const DateTimeStyled = styled(DateTime)`
    input{
        ${InputCss};
        
        :focus{
            box-shadow: none;
            border: 2px dashed ${({theme})=> theme.primary};
            background-color: ${({theme})=> theme.background};
            color: ${({theme})=> theme.primary};
        }
    }

    .rdtPicker{
        color: ${({theme})=> theme.primary};
        background-color: ${({theme})=> theme.background};
        border: 2px solid ${({theme})=> theme.primary};
        border-radius: 5px;
    }

    div.rdtDays {
        thead {
            color: ${({theme})=> theme.text};
            border-bottom: 1px solid ${({theme})=> theme.primary};
        }

        tfoot{
            border-top: 1px solid ${({theme})=> theme.primary};
        }

        th{
            border-bottom: none;
        }

        .rdtPicker th.dow {
        }

        thead tr:first-of-type th {
            color: ${({theme})=> theme.primary};


            :hover{
                color: ${({theme})=> theme.background};
                background-color: ${({theme})=> theme.secondary};
                border-radius: 5px;
            }

            &.rdtPrev:hover,&.rdtNext:hover{
                border-radius: 50%;
            }
        }

        td.rdtToday:before{
            border-bottom: 7px solid ${({theme})=> theme.primary};
        }

        td.rdtOld, td.rdtNew{
            color: ${({theme})=>theme.background} !important;
            cursor: default;

            :hover{
                color: ${({theme})=>theme.background};
                background-color: ${({theme})=>theme.background};
            }
        }

        td.rdtActive{
            border-radius: 5px 20px 5px;
            background-color: ${({theme})=> { return  theme.primary }};
            color: ${({theme})=> theme.background};
        }

        td:hover{
            background-color: ${({theme})=> theme.secondary};
            color: ${({theme})=> theme.background};
            border-radius: 5px;
        }
        
        tfoot{
            margin: 4px 0px;
            border-top: 1px solid ${({theme})=> theme.primary};
        }
    }

    .rdtTime{

        thead {
            color: ${({theme})=> theme.primary};
            border-bottom: 1px solid ${({theme})=> theme.primary};

            td{
                cursor: pointer;
                
                :hover{
                    color: ${({theme})=> theme.background};
                    background-color: ${({theme})=> theme.secondary};
                    border-radius:5px;
                }
            }

        }

        .rdtCount,.rdtCounterSeparator{
            color: ${({theme})=> theme.text};
        }

        .rdtBtn{
            color: ${({theme})=> theme.primary};
            :hover{
                border-radius: 20px;
                background-color: ${({theme})=> theme.alternate};
            }
        }
    }

    .rdtMonths,.rdtYears{
        th{
            border-bottom: none;
        }
        
        thead {
            color: ${({theme})=> theme.primary};
            border-bottom: 1px solid ${({theme})=> theme.primary};
        }
        
        td.rdtActive{
            border-radius: 5px 20px 5px;
            background-color: ${({theme})=> { return  theme.primary }};
            color: ${({theme})=> theme.background};
        }

        td{
            :hover{
                color: ${({theme})=> theme.background};
                background-color: ${({theme})=> theme.secondary};
                border-radius:5px;
            }
        }

        thead tr:first-of-type th {
            color: ${({theme})=> theme.primary};


            :hover{
                color: ${({theme})=> theme.background};
                background-color: ${({theme})=> theme.secondary};
                border-radius: 5px;
            }

            &.rdtPrev:hover,&.rdtNext:hover{
                border-radius: 50%;
            }
        }
    }
`
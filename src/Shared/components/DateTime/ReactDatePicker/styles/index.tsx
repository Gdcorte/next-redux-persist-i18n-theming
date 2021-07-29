import DatePicker from "react-datepicker";

import styled, { createGlobalStyle  } from 'styled-components'

import {InputCss} from 'src/Shared/styles/Input'

export const DateWrapper = styled(({ className, ...props }) => (
    <DatePicker 
        {...props} 
        wrapperClassName={className} 
        calendarContainer={CalendarStyled} 
    />
  ))`
    width: 100%;

    input {
        ${InputCss}
    }

  `;

export const DatePickerModifier = createGlobalStyle`
    .react-datepicker-popper{
        left: 8px !important;
        margin-top: 0 !important;
    }

    .react-datepicker{
        color: ${({theme})=>theme.primary};

        .react-datepicker__header{
            background-color: ${({theme}) => theme.background};
            border-bottom: 1px solid ${({theme}) => theme.background};
            border-radius: 5px;
        }

        .react-datepicker__day-names{
            background-color: ${({theme})=>theme.background};
        }

        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
            color: ${({theme})=>theme.text};
        }

        .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {
            background-color: ${({theme})=>theme.secondary.background};
            color: ${({theme})=>theme.primary.background};
        }

        .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
            background-color: ${({theme})=>theme.primary.background};
            color: ${({theme})=>theme.secondary.background};
            border-radius: 5px;
            border: 1px solid ${({theme})=>theme.primary.text};
        }

        .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header{
            color: ${({theme})=>theme.primary.text}
        }

        // Header Styling
        .react-datepicker__navigation--next {
            border-left-color:  ${({theme})=>theme.primary.text};
        }

        .react-datepicker__navigation--previous {
            border-right-color:  ${({theme})=>theme.primary.text};
        }

        .react-datepicker__navigation--years-previous {
            border-top-color: ${({theme})=>theme.primary.text};
        }
        .react-datepicker__navigation--years-upcoming {
            border-bottom-color: ${({theme})=>theme.primary.text};
        }
        .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow {
            border-top-color:  ${({theme})=>theme.primary.text};
        }

        .react-datepicker__year-dropdown, .react-datepicker__month-dropdown, .react-datepicker__month-year-dropdown {
            background-color: ${({theme})=>theme.background};
        }

        .react-datepicker__year-option:hover, .react-datepicker__month-option:hover, .react-datepicker__month-year-option:hover{
            background-color: ${({theme})=>theme.secondary.background};
            color: ${({theme})=>theme.primary.background};
        }

        .react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming, .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming, .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming{
            border-bottom-color: ${({theme})=>theme.primary.background};
        }

        .react-datepicker__year-option:hover .react-datepicker__navigation--years-previous, .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous, .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous{
            border-top-color:  ${({theme})=>theme.primary.background};
        }

        // Changes selected day styling
        .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
            background-color: ${({theme})=>theme.primary.background};
            color: ${({theme})=>theme.secondary.background};
            border-radius: 5px;
            border: 1px solid ${({theme})=>theme.primary.text};
        }


        // This hides outside of month days from the calendar
        .react-datepicker .react-datepicker__day, .react-datepicker .react-datepicker__time-name, .react-datepicker__day--outside-month  {
            color: ${({theme})=>theme.background};
            cursor: default;
        }

        .react-datepicker:hover .react-datepicker__day:hover, .react-datepicker:hover .react-datepicker__time-name:hover, .react-datepicker__day--outside-month:hover {
            background-color: ${({theme})=>theme.background};
            color: ${({theme})=>theme.background};
        }

        .react-datepicker:selected .react-datepicker__day:selected, .react-datepicker:selected .react-datepicker__time-name:selected, .react-datepicker__day--outside-month:selected {
            background-color: ${({theme})=>theme.background};
            color: ${({theme})=>theme.background};
            border-radius: 5px;
            border: 1px solid ${({theme})=>theme.background};
        }

        
    }
`

const CalendarStyled = styled.div`
  border-radius: 5px;
  background-color: ${({theme}) => theme.background};
  border: 2px solid ${({theme})=> theme.primary.background};

  .react-datepicker__day react-datepicker__day--008 react-datepicker__day--weekend {
      color: ${({theme})=> theme.primary.text};
  }
`;

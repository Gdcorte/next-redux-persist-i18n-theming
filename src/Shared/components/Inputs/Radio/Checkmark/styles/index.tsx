import styled from 'styled-components'

export const RadioContainer = styled.div`
    display:flex;
`

export const Icon = styled.svg`
  stroke: ${({theme}) => ( theme.background )};
  stroke-width: 6px;
  position: absolute;
`
// Hide Radio visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenRadio = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 0px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`

export const StyledRadio = styled.div`
  display: inline-block;
  width: ${({size})=> (size || 20)}px;
  height: ${({size})=> (size || 20)}px;
  background: ${({checked, theme}) => (checked ? 
    theme.primary : 
    theme.background
  )};
  border-radius: 20px;
  border: 2px solid ${({theme})=> theme.primary};
  transition: all 150ms;
  position:relative;

  ${Icon} {
    visibility: ${({checked}) => (checked  ? 'visible' : 'hidden')};
    fill: ${({theme})=> theme.background};
  }
`
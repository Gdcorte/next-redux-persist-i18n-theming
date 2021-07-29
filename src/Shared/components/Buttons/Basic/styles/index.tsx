import styled from 'styled-components'

import {
    BasicButtonCss,
    AlertButtonCss,
} from 'src/Shared/styles/Buttons'

export const ButtonStyled = styled.button`
    ${({variant}) =>
        ['danger', 'success', 'warning', 'info'].includes(variant) ?
            AlertButtonCss :
            BasicButtonCss
    }
` 
import Theme from 'src/Shared/components/Theme'
import Color from 'src/Shared/components/Color'
import Language from 'src/Shared/components/Language'

import {
    WrapperStyled
} from './styles'

const BasicTopBar = () => {


    return(
        <>
            <WrapperStyled>
                <Theme />
                <Color />
                <Language />
            </WrapperStyled>
        </>
    )
}

export default BasicTopBar
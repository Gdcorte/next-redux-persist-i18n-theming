import { FunctionComponent } from "react"

import {
    SpinnerStyled,
    SpinnerContainer,
} from './styles'

interface SpinnerInterface {
    loadState: boolean,
}

const SpinnerLoader:FunctionComponent<SpinnerInterface> = ({
    loadState
}) => {


    return (
        <>
            {loadState &&
                <SpinnerContainer>
                    <SpinnerStyled />
                </SpinnerContainer>
                // <div className="spinner-border" role="status">
                //     <span className="sr-only">Loading...</span>
                // </div>
            }
        </>
    )
}

SpinnerLoader.defaultProps = {
    loadState: false
}

export default SpinnerLoader
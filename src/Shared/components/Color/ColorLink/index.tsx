import { FunctionComponent } from 'react'

import { ColoringStyled } from './style'

interface ColorLinkInterface {
    colorCode?:string,
}

export const ColorLink: FunctionComponent<ColorLinkInterface> = ({
    colorCode
}) => {
    return(
        <>
            <ColoringStyled  
                overrideColor={colorCode}
            />
        </>
    )
}
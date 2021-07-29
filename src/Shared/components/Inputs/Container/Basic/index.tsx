import { FunctionComponent } from "react";

import {
    ContainerStyled,
    TitleStyled,
} from './styles'

interface InputContainerInterface {
    label:string,
    bold?: boolean,
    key?: string,
    usePointer?: boolean,
}

const InputContainer:FunctionComponent<InputContainerInterface> = ({ 
    children,
    label,
    bold,
    usePointer,
}) => {

    return(
        <> 
            <ContainerStyled
                pointer={usePointer}
            >
                
                <TitleStyled 
                    bold={bold}
                >
                    {label}:
                </TitleStyled>
                
                {children}
            </ContainerStyled>
        </>
    )
}

InputContainer.defaultProps = {
    bold: false,
    usePointer: true,
    key:undefined,
}

export default InputContainer
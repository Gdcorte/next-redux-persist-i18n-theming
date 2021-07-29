import { useState } from 'react'
import {LabelStyled, CaptionStyled} from './styles'

import RadioMark from './Checkmark'

const RadioButton = ({
    valueHandler,
    name,
    checked,
    label="Check me?",
    bold=false,
    ...props
}) =>{
    // const [checked, setchecked] = useState(defaultState)

    function changeState(event){

        valueHandler({
            checked: true,
            name
        })

    }

    return(
        <>
            <LabelStyled 
                className={'cursor-pointer'}
            >
                <RadioMark
                    checked={checked==name} 
                    onChange={changeState}
                    {...props}
                />

                <CaptionStyled 
                    className={'margin-left'}
                    bold={bold}>
                    {label}
                </CaptionStyled>
            </LabelStyled>

        </>
    )
}

export default RadioButton
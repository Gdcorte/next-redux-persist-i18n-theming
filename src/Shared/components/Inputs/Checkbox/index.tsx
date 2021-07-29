import { useState } from 'react'
import {LabelStyled, CaptionStyled} from './styles'

import Checkmark from './Checkmark'

const Checkbox = ({
    onChange,
    label="Check me!",
    checked= false,
    bold=false,
}) =>{

    function changeState(event){
        let checkState = !checked
        
        onChange({
            checked: checkState,
            input: event,
        })
    }

    return(
        <>
            <LabelStyled 
                className={'cursor-pointer'}
            >
                <Checkmark
                    checked={checked} 
                    onChange={changeState}
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

export default Checkbox
import {FunctionComponent} from 'react'

// import styles from '../../../../styles/Inputs.module.css'
import { useState } from 'react'

import { WrapperStyled, IconStyled } from './styles'

import InputStyled from '../Simple'

import {Icon} from './Icon'

interface PasswordInterface { 
    validInput?: boolean,
    errorMessage?: string,
    value: string,
    onChange: CallableFunction,
}

const Password: FunctionComponent<PasswordInterface> = ({
    validInput,
    errorMessage,
    ...props
}) =>{
    const [iconStatus, seticonStatus] = useState("locked")
    const [inputType, setinputType] = useState('password')
    const [lockStatus, setlockStatus] = useState(true)
    
    function toggleImgIcon(){
        let newIconStatus = 'locked'
        let newInputStatus = 'password'

        if (inputType =='password'){
            newIconStatus = 'unlocked'
            newInputStatus = 'text'
        }

        seticonStatus(newIconStatus)
        setinputType(newInputStatus)
        setlockStatus(!lockStatus)
    }

    return(
        <WrapperStyled>
            <InputStyled 
                {...props}
                validInput={validInput}
                type={inputType}
            />
            
            <IconStyled
                className='cursor-pointer'
                onClick={toggleImgIcon}
            >
                <Icon locked={lockStatus} />
            </IconStyled>
        
        </WrapperStyled>
    )
}

Password.defaultProps = {
    validInput: true,
    errorMessage: '',
}

export default Password

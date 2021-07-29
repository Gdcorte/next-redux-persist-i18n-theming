import { InputStyled, SpanStyled } from './styles'

const SimpleInput = ({
    validInput=true,
    errorMessage='Invalid Input',
    ...props
}) => {
    return (
        <>
            <InputStyled 
                {...props}
            />
            {!validInput && <SpanStyled>{errorMessage}</SpanStyled>}
        </>
    )
}

export default SimpleInput
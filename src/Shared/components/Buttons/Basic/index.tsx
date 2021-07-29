
import { ButtonStyled } from './styles'

const Button = ({
    caption,
    variant='primary',
    ...props
}) =>{

    return (
        <>
            <ButtonStyled
                {...props}
                variant={variant!='primary' ? variant : undefined}
            >
                {caption}
            </ButtonStyled>
        </>
    )
}

export default Button
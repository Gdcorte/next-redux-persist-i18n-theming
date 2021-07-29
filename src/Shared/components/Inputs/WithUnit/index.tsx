import { ContainerStyled, UnitStyled } from './styles'
import { SimpleInput } from '../'

const WithUnitInput = ({
    unitValue,
    ...props
}) => {
    return (
        <>
           <ContainerStyled>
                <SimpleInput 
                    {...props}
                />
                <UnitStyled>{unitValue}</UnitStyled>
            </ContainerStyled>
        </>
    )
}

export default WithUnitInput
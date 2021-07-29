import { useTranslation } from 'next-i18next'

import { 
    BasicTopBar,
} from '../components'

import { 
    WrapperStyled,
    ExternalWrapperStyled,
    TitleStyled,
    TitleWrapperStyled,
} from './styles'

const LogFlow = ({
    children, 
}) => {
    const { t } = useTranslation('common')

    return (
        <>  
            <ExternalWrapperStyled>
                <WrapperStyled>
                    <BasicTopBar />

                    <TitleWrapperStyled>
                        <TitleStyled>{t('Basic Application')}</TitleStyled>
                    </TitleWrapperStyled>
                    
                    {children}
            
                    <div>
                        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    </div>
                </WrapperStyled>
            
            </ExternalWrapperStyled>
            
        </>
    )
}

export default LogFlow
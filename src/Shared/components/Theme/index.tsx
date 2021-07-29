import { useDispatch, useSelector } from 'react-redux'

import { useTranslation } from 'next-i18next'

import {ImageLink} from 'src/Shared/components/Image'

import {changeTheme} from 'redux/actions'
import {storeType} from 'redux/store'

import { ToggleStyled, ParagraphStyled, TextVariants } from './style'

const Theme = ()=>{
    const {theme, compact} = useSelector(
        (state:storeType) => {
            return {
                theme: state.settings.theme,
                compact: true
            }
        }
    )

    const dispatch = useDispatch()
    
    const { t } = useTranslation('common')


    function changeTheming(){
        let newTheme = theme=='dark' ? 'light' : 'dark' 
        dispatch(changeTheme(newTheme))
    }

    return(
        <>
            <ToggleStyled 
                className='d-flex align-items-center cursor-pointer' 
                onClick={changeTheming}
            >
                <ParagraphStyled 
                    className='margin-right'
                    initial={compact ? 'collapsed' : 'expanded'}
                    animate={compact ? 'collapsed' : 'expanded'}
                    variants={TextVariants}
                >
                    {t('Theme')}:
                </ParagraphStyled>
                <ImageLink 
                    basePath={'/img/components/themes'}
                    localeName={theme}
                />
            </ToggleStyled>
        </>
    )
}

export default Theme
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'

import {ImageLink} from 'src/Shared/components/Image'
import {storeType} from 'redux/store'

import {
    DropDownStyled, 
    DropDownItemStyled,
    DropDownMenuStyled,
    DropDownToggleStyled,
    ParagraphStyled,
    TextVariants
} from './style'

const Language = ()=>{
    const compact: boolean = true
    const { t } = useTranslation('common')

    const router = useRouter()

    function changeLocale(newLocale: string = 'en'){
        router.push('', '', { locale: newLocale })
    }

    return(
        <>
            <DropDownStyled>
                <DropDownToggleStyled className='d-flex justify-center align-items-center'>
                    <ParagraphStyled 
                        className='margin-right'
                        initial={compact ? 'collapsed' : 'expanded'}
                        animate={compact ? 'collapsed' : 'expanded'}
                        variants={TextVariants}
                    >
                        {t('Language')}:
                    </ParagraphStyled>
                    <>
                        <ImageLink 
                            localeName={router.locale}
                        />
                    </>
                </DropDownToggleStyled>

                <DropDownMenuStyled
                    compact={String(compact)}
                >
                    {
                        router.locales.map((localeName)=>{
                            return (
                                <DropDownItemStyled
                                    key={`localeDropDownItem${localeName}`}
                                    onClick={()=>{
                                        changeLocale(localeName)
                                    }}>
                                    <ImageLink 
                                        localeName={localeName}
                                    />
                                </DropDownItemStyled>
                            )
                        })
                    }
                </DropDownMenuStyled>
            </DropDownStyled>
        </>
    )
}

export default Language
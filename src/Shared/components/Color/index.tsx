import { useDispatch, useSelector } from 'react-redux'


import { useTranslation } from 'next-i18next'

import {ColorLink} from './ColorLink'
import {storeType} from 'redux/store'

import {
    DropDownStyled, 
    DropDownItemStyled,
    DropDownMenuStyled,
    DropDownToggleStyled,
    ParagraphStyled,
    TextVariants, 
} from './style'

import {changeColor} from '../../../../redux/actions'

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface ColoringObj {
    mergedPrimary: object,
}

const Color = ()=>{
    const compact:boolean = true    

    const dispatch = useDispatch()

    const { t } = useTranslation('common')

    const themeContext:ColoringObj = useContext(ThemeContext);

    const colorMapping = Object.keys(themeContext.mergedPrimary)

    function changeColoring(newColor: string = 'en'){
        dispatch(changeColor(newColor))
    }

    return(
        <>
            <DropDownStyled>
                <DropDownToggleStyled className='d-flex justify-center align-items-center'>
                    <ParagraphStyled 
                        initial={compact ? 'collapsed' : 'expanded'}
                        animate={compact ? 'collapsed' : 'expanded'}
                        variants={TextVariants}
                        className='margin-right'
                    >
                        {t('Color')}:
                    </ParagraphStyled>
                    <ColorLink />
                </DropDownToggleStyled>

                <DropDownMenuStyled
                    compact={String(compact)}
                >
                    {
                        colorMapping.map((colorName)=>{
                            let colorCode = themeContext.mergedPrimary[colorName]
                            
                            return (
                                <DropDownItemStyled
                                    key={`colorDropDownItem${colorName}`}
                                    onClick={()=>{
                                        changeColoring(colorName)
                                    }}>
                                    <ColorLink 
                                        colorCode={colorCode}
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

export default Color
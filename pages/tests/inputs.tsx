// import Template from 'src/Layouts/System'
import { useTranslation } from 'next-i18next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import {
    Password,
    SimpleInput,
    WithUnitInput,
    Checkbox,
    RadioButton,    
    BasicInputContainer,
} from 'src/Shared/components/Inputs'

import { useState } from 'react'
import { LinkStyled } from 'src/Shared/components'
import Template from 'appLayouts/Basic'

const InputTestContainer = styled.div`
    display: flex;
    flex-direction: column;

    >div,label{
        margin: 8px 0px;
    }

` 

const TestPage = () => {
    const [checkValue, setcheckValue] = useState(false)
    const [passValue, setpassValue] = useState('')
    const [selectedRadio, setselectedRadio] = useState("op1")

    const { t } = useTranslation('common')

    function changeCheckboxState(newState){
        setcheckValue(newState['checked'])
    }

    function changePasswordInput(event){
        setpassValue(event.target.value)
    }

    function changeRadioValue(event){
        setselectedRadio(event['name'])
    }

    return(
        <div
            style={{
                padding: '12px',
                width:'100%'
            }}
        >   

            <InputTestContainer>
                <Password 
                    value={passValue}
                    onChange={changePasswordInput}
                />

                <BasicInputContainer
                    label={t('Simple Input Simple COntainer')}
                >
                    <SimpleInput />
                </BasicInputContainer>

                <WithUnitInput 
                    unitValue='mm'
                />
                <Checkbox 
                    label={t("CHeckbox")}
                    checked={checkValue}
                    onChange={changeCheckboxState}
                    
                />
                <RadioButton 
                    label={t("Option 1")}
                    checked ={selectedRadio}
                    valueHandler={changeRadioValue}
                    name="op1"
                />
                <RadioButton 
                    label={t("Option 2")}
                    checked ={selectedRadio}
                    valueHandler={changeRadioValue}
                    name="op2"
                />
            </InputTestContainer>        
            
            <LinkStyled 
                textField ={t('Return')}
                href='/tests'
            />
        </div>
    )
}

TestPage.Layout = Template

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    }
})

export default TestPage
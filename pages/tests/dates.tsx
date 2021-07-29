// import Template from 'src/Layouts/System'
import { useTranslation } from 'next-i18next'
import styled from 'styled-components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import {
    ReactDateTime,
    ReactDatePicker,
} from 'src/Shared/components/DateTime'
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
    const { t } = useTranslation('common')

    function changeDateTime(newDate){
        console.log(newDate)
    }

    return(
        <div
            style={{
                padding: '12px',
                width:'100%'
            }}
        >  
            <InputTestContainer>
                <ReactDatePicker selected={new Date()} />
            
                <ReactDateTime  
                    onChange={changeDateTime}
                    initialValue={new Date()}
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
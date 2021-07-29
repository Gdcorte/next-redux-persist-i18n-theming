// import Template from 'src/Layouts/System'
import { useTranslation } from 'next-i18next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import {
    BasicButton,    
} from 'src/Shared/components/Buttons'
import { LinkStyled } from 'src/Shared/components'
import Template from 'appLayouts/Basic'

const ButtonTestContainer = styled.div`
    display: flex;
    flex-direction: column;

    button {
        margin: 6px;
    }

` 

const TestPage = () => {

    const { t } = useTranslation('common')

    return(
        <div
            style={{
                padding: '12px',
                width:'100%'
            }}
        >  
            <ButtonTestContainer>
                <BasicButton caption={t("Default")} />
                <BasicButton caption={t("Primary")} variant='primary'/>
                <BasicButton caption={t("Secondary")} variant='secondary'/>
                <BasicButton caption={t("Tertiary")} variant='tertiary'/>
                <BasicButton caption={t("Disabled")} disabled/>
                <BasicButton caption={t("Danger")} variant='danger'/>
                <BasicButton caption={t("Success")} variant='success'/>
                <BasicButton caption={t("Warning")} variant='warning'/>
                <BasicButton caption={t("Info")} variant='info'/>
            </ButtonTestContainer>
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
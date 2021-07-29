// import Template from 'src/Layouts/System'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LinkStyled } from 'src/Shared/components'

import Template from 'appLayouts/Basic'

const TestPage = () => {
    
    const { t } = useTranslation('common')

    return(
        <>
            <LinkStyled 
                textField ={t('Go to Buttons Page')}
                href='/tests/buttons'
            />
                
            
            <LinkStyled 
                textField ={t('Go to Inputs Page')}
                href='/tests/inputs'
            />

            <LinkStyled 
                textField={t('Go to DateTime FIelds Page')}
                href='/tests/dates' 
            />
           
        </>
    )
}

TestPage.Layout = Template

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    }
})

export default TestPage
import { appWithTranslation } from 'next-i18next'

const EmptyLayout = ({children}) => { return( <>{children}</> )}

const MyApp = ({ Component, pageProps }) => {
  
  const Layout = Component.Layout || EmptyLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp)

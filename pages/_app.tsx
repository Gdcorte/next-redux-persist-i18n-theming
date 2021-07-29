import { Provider } from 'react-redux'
import { useStore } from '../redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

import I18nApp from './_i18nApp'
import ThemedApp from './_themedApp'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'


const  MyApp = ({ Component, pageProps, router })=>{
  const store = useStore(pageProps.initialReduxState)

  return (

    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={null}>
        <ThemedApp>
          <I18nApp
            Component={Component}
            pageProps={pageProps}
            router={router}
          />
        </ThemedApp>
      </PersistGate>
    </Provider>
  
  )
}

export default (MyApp)

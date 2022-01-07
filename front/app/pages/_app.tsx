import '../styles/globals.css'
import '../styles/card.css'
import "tailwindcss/tailwind.css"
import { Provider } from 'react-redux'
import { store } from '../src/store/store'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

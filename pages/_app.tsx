import '../styles/globals.css'

import type { AppProps } from 'next/app'
import type { FC } from 'react'
import { Provider } from 'react-redux'

import store from '@/app/store'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
	<Provider store={store}>
		<Component {...pageProps} />
	</Provider>
)

export default MyApp

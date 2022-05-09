/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/export */
import { configureStore } from '@reduxjs/toolkit'
import { render as rtlRender } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

// Import your own reducer
import counterReducer from '@/features/counter/counterSlice'

function render(
	ui: JSX.Element,
	{
		store = configureStore({
			reducer: {
				counter: counterReducer
			}
		})
	} = {}
) {
	const Wrapper = ({ children }: { children: React.ReactNode }) => {
		return <Provider store={store}>{children}</Provider>
	}
	return rtlRender(ui, { wrapper: Wrapper })
}
export * from '@testing-library/react'
// override render method
export { render }

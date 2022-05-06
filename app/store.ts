import type { AnyAction, EnhancedStore } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import type { CounterState } from '@/features/counter/counterSlice'
import counterReducer from '@/features/counter/counterSlice'

export const makeStore: () => EnhancedStore<
	{
		counter: CounterState
	},
	AnyAction
> = () =>
	configureStore({
		reducer: { counter: counterReducer }
	})

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

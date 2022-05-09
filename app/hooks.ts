import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import type { Dispatch } from 'redux'

import type { AppDispatch, AppState } from './store'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch: () => Dispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

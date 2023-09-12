import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import menuModaReducer from '../features/menuModalSlice';
import moviesReducer from "../features/moviesSlice";

export const store = configureStore({
  reducer: {
    menuModal: menuModaReducer,
    movies: moviesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
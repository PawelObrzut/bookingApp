import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import menuModaReducer from '../features/menuModal/menuModalSlice';
import moviesReducer from '../features/movies/moviesSlice';

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
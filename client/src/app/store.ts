import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import menuModaReducer from './features/menuModalSlice';
import moviesReducer from './features/moviesSlice';
import sliderReducer from './features/sliderSlice';
import repertoireReducer from './features/repertoireSlice';
import seatingPlanReducer from './features/seatingPlanSlice';

export const store = configureStore({
  reducer: {
    menuModal: menuModaReducer,
    movies: moviesReducer,
    slides: sliderReducer,
    repertoire: repertoireReducer,
    seatingPlan: seatingPlanReducer,
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
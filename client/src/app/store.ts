import { configureStore } from '@reduxjs/toolkit'
import menuModaReducer from '../features/menuModal/menuModalSlice';

export const store = configureStore({
  reducer: {
    menuModal: menuModaReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
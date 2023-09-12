import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

interface MenuModalState {
  isOpen: boolean
}

const initialState: MenuModalState = {
  isOpen: false,
};

export const menuModalSlice = createSlice({
  name: 'menuModal',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = menuModalSlice.actions;

export default menuModalSlice.reducer; 
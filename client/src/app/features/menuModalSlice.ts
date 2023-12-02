import { createSlice } from '@reduxjs/toolkit'

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
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = menuModalSlice.actions;

export default menuModalSlice.reducer; 
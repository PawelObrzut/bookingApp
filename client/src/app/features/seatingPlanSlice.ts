import { createSlice } from '@reduxjs/toolkit'

interface SeatingPlanState {
  isOpen: boolean
}

const initialState: SeatingPlanState = {
  isOpen: false,
};

export const seatingPlanSlice = createSlice({
  name: 'seatingPlan',
  initialState,
  reducers: {
    toggleSeatingPlan: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSeatingPlan } = seatingPlanSlice.actions;

export default seatingPlanSlice.reducer; 
import { createSlice } from '@reduxjs/toolkit'

interface SeatingPlanState {
  isOpen: boolean
  movieDetails: {
    movieId: number | undefined
    showtimeUuid: string
    time: string
  }
}

const initialState: SeatingPlanState = {
  isOpen: false,
  movieDetails: {
    movieId: undefined,
    showtimeUuid: "",
    time: ""
  }
};

export const seatingPlanSlice = createSlice({
  name: 'seatingPlan',
  initialState,
  reducers: {
    toggleSeatingPlan: (state) => {
      state.isOpen = !state.isOpen;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = {
        ...state.movieDetails,
        ...action.payload,
      };
    }
  },
});

export const { toggleSeatingPlan, setMovieDetails } = seatingPlanSlice.actions;

export default seatingPlanSlice.reducer; 
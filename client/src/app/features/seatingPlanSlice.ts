import { createSlice } from '@reduxjs/toolkit'

interface SeatingPlanState {
  isOpen: boolean
  movieDetails: {
    movieId: number | undefined
    showtimeId: string
    time: string
  }
}

const initialState: SeatingPlanState = {
  isOpen: false,
  movieDetails: {
    movieId: undefined,
    showtimeId: "",
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
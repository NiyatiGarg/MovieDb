import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    popular: [],
    topRated: [],
    upcoming: [],
    activeTab: 'popular',
  },
  reducers: {
    setMovies: (state, { payload }) => {
      return { ...state, [payload.activeTab]: payload.movies || [] };
    },
    setActiveTab: (state, { payload }) => {
        state.activeTab = payload;
    }
  },
});

export const { setMovies, setActiveTab } = movieSlice.actions;
export default movieSlice.reducer;

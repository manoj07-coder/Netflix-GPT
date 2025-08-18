import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    videoData: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addVideoData: (state, action) => {
      state.videoData = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addVideoData } = moviesSlice.actions;

export default moviesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage: "false",
  },
  reducers: {
    setShowGptPage: (state, action) => {
      state.showGptPage = !state.showGptPage;
    },
  },
});

export const { setShowGptPage } = gptSlice.actions;

export default gptSlice.reducer;

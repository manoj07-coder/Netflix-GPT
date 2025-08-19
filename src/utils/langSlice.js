import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    language: "English",
  },
  reducers: {
    setLang: (state, actions) => {
      state.language = actions.payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;

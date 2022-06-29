import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};
const settings = createSlice({
  initialState,
  name: "settings",
  reducers: {
    toggleDarkMode: (state) => {
      return { ...state, darkMode: !state.darkMode };
    },
  },
});

export const { toggleDarkMode } = settings.actions;
export default settings;

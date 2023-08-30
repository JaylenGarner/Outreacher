import { createSlice } from "@reduxjs/toolkit";

export const currentTemplate = createSlice({
  name: "currentTemplate",
  initialState: {},
  reducers: {
    setCurrentTemplate: (state, action) => {
      state = action.payload;
      return state;
    },
    clearCurrentTemplate: () => {
      return {};
    },
  },
});

export const { setCurrentTemplate, clearCurrentTemplate } =
  currentTemplate.actions;
export default currentTemplate.reducer;

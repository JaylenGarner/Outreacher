import { createSlice } from "@reduxjs/toolkit";

export const currentApplication = createSlice({
  name: "currentApplication",
  initialState: {},
  reducers: {
    setCurrentApplication: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setCurrentApplication } = currentApplication.actions;
export default currentApplication.reducer;

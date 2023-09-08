import { createSlice } from "@reduxjs/toolkit";

export const applicationFormLoaded = createSlice({
  name: "applicationFormLoaded",
  initialState: false,
  reducers: {
    setApplicationFormLoaded: (state, action) => {
      return action.payload;
    },
  },
});

export const { setApplicationFormLoaded } = applicationFormLoaded.actions;
export default applicationFormLoaded.reducer;

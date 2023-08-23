import { createSlice } from "@reduxjs/toolkit";

export const applicationsLoaded = createSlice({
  name: "applicationsLoaded",
  initialState: false,
  reducers: {
    setApplicationsLoaded: (state, action) => {
      return action.payload;
    },
  },
});

export const { setApplicationsLoaded } = applicationsLoaded.actions;
export default applicationsLoaded.reducer;

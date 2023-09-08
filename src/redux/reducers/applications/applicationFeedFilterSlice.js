import { createSlice } from "@reduxjs/toolkit";

export const applicationFeedFilter = createSlice({
  name: "applicationFeedFilter",
  initialState: "All",
  reducers: {
    setApplicationFeedFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setApplicationFeedFilter } = applicationFeedFilter.actions;
export default applicationFeedFilter.reducer;

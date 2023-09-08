import { createSlice } from "@reduxjs/toolkit";

export const currentFeed = createSlice({
  name: "currentFeed",
  initialState: "outreach",
  reducers: {
    setCurrentFeed: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setCurrentFeed } = currentFeed.actions;
export default currentFeed.reducer;

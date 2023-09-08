import { createSlice } from "@reduxjs/toolkit";

export const templatesLoaded = createSlice({
  name: "templatesLoaded",
  initialState: false,
  reducers: {
    setTemplatesLoaded: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTemplatesLoaded } = templatesLoaded.actions;
export default templatesLoaded.reducer;

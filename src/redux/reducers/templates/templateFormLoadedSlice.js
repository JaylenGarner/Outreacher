import { createSlice } from "@reduxjs/toolkit";

export const templateFormLoaded = createSlice({
  name: "templateFormLoaded",
  initialState: false,
  reducers: {
    setTemplateFormLoaded: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTemplateFormLoaded } = templateFormLoaded.actions;
export default templateFormLoaded.reducer;

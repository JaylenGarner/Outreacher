import { createSlice } from "@reduxjs/toolkit";

export const contactFormLoaded = createSlice({
  name: "contactFormLoaded",
  initialState: false,
  reducers: {
    setContactFormLoaded: (state, action) => {
      return action.payload;
    },
  },
});

export const { setContactFormLoaded } = contactFormLoaded.actions;
export default contactFormLoaded.reducer;

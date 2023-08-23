import { createSlice } from "@reduxjs/toolkit";

export const contactsLoaded = createSlice({
  name: "contactsLoaded",
  initialState: false,
  reducers: {
    setContactsLoaded: (state, action) => {
      return action.payload;
    },
  },
});

export const { setContactsLoaded } = contactsLoaded.actions;
export default contactsLoaded.reducer;

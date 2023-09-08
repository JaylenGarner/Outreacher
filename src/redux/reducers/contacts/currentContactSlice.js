import { createSlice } from "@reduxjs/toolkit";

export const currentContact = createSlice({
  name: "currentContact",
  initialState: {},
  reducers: {
    setCurrentContact: (state, action) => {
      state = action.payload;
      return state;
    },
    clearCurrentContact: () => {
      return {};
    },
  },
});

export const { setCurrentContact, clearCurrentContact } =
  currentContact.actions;
export default currentContact.reducer;

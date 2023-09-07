import { createSlice } from "@reduxjs/toolkit";

export const contactIsNew = createSlice({
  name: "contactIsNew",
  initialState: false,
  reducers: {
    setContactIsNew: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setContactIsNew } = contactIsNew.actions;
export default contactIsNew.reducer;

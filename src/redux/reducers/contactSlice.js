import { createSlice } from "@reduxjs/toolkit";

export const contacts = createSlice({
  name: "contacts",
  initialState: {},
  reducers: {
    getContacts: (state, action) => {
      const newState = { ...state };

      action.payload.forEach((contact) => {
        newState[contact._id] = contact;
      });

      return newState;
    },
    createContact: (state, action) => {
      return {
        [action.payload._id]: action.payload,
        ...state,
      };
    },
    deleteContact: (state, action) => {
      const newState = { ...state };
      const application = action.payload;
      delete newState[application._id];
      return newState;
    },
    clearContacts: () => {
      return {};
    },
  },
});

export const { getContacts, createContact, deleteContact, clearContacts } =
  contacts.actions;
export default contacts.reducer;

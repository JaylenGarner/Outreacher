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
        ...state,
        [action.payload._id]: action.payload,
      };
    },
    deleteContact: (state, action) => {
      const newState = { ...state };
      const contact = action.payload;
      delete newState[contact._id];
      return newState;
    },
    cascadeDeleteContacts: (state, action) => {
      const newState = { ...state };
      const applicationId = action.payload;

      Object.values(newState).forEach((contact) => {
        if (contact.application === applicationId) {
          delete newState[contact._id];
        }
      });

      return newState;
    },
    clearContacts: () => {
      return {};
    },
  },
});

export const {
  getContacts,
  createContact,
  deleteContact,
  cascadeDeleteContacts,
  clearContacts,
} = contacts.actions;

export default contacts.reducer;

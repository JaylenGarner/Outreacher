import { configureStore } from "@reduxjs/toolkit";
import applications from "./reducers/applicationSlice";
import currentApplication from "./reducers/currentApplicationSlice";
import contacts from "./reducers/contactSlice";
import currentContact from "./reducers/currentContactSlice";
import currentModal from "./reducers/currentModalSlice";

const store = configureStore({
  reducer: {
    applications,
    currentApplication,
    contacts,
    currentContact,
    currentModal,
  },
});

export default store;

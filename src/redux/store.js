import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/userSlice";
import applications from "./reducers/applicationSlice";
import currentApplication from "./reducers/currentApplicationSlice";
import contacts from "./reducers/contactSlice";
import currentContact from "./reducers/currentContactSlice";
import currentModal from "./reducers/currentModalSlice";
import currentFeed from "./reducers/currentFeedSlice";

const store = configureStore({
  reducer: {
    user,
    applications,
    currentApplication,
    contacts,
    currentContact,
    currentModal,
    currentFeed,
  },
});

export default store;

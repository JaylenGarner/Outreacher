import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/userSlice";
import applications from "./reducers/applicationSlice";
import currentApplication from "./reducers/currentApplicationSlice";
import applicationsLoaded from "./reducers/applicationsLoadedSlice";
import contacts from "./reducers/contactSlice";
import currentContact from "./reducers/currentContactSlice";
import contactsLoaded from "./reducers/contactsLoadedSlice";
import currentModal from "./reducers/currentModalSlice";
import currentFeed from "./reducers/currentFeedSlice";

const store = configureStore({
  reducer: {
    user,
    applications,
    currentApplication,
    applicationsLoaded,
    contacts,
    currentContact,
    contactsLoaded,
    currentModal,
    currentFeed,
  },
});

export default store;

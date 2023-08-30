import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/userSlice";
import applications from "./reducers/applicationSlice";
import currentApplication from "./reducers/currentApplicationSlice";
import applicationsLoaded from "./reducers/applicationsLoadedSlice";
import applicationFormLoaded from "./reducers/applicationFormLoadedSlice";
import contacts from "./reducers/contactSlice";
import currentContact from "./reducers/currentContactSlice";
import contactsLoaded from "./reducers/contactsLoadedSlice";
import contactFormLoaded from "./reducers/contactFormLoadedSlice";
import templates from "./reducers/templateSlice";
import currentTemplate from "./reducers/currentTemplateSlice";
import templateFormLoaded from "./reducers/templateFormLoaded";
import currentModal from "./reducers/currentModalSlice";
import currentFeed from "./reducers/currentFeedSlice";

const store = configureStore({
  reducer: {
    user,
    applications,
    currentApplication,
    applicationsLoaded,
    applicationFormLoaded,
    contacts,
    currentContact,
    contactsLoaded,
    contactFormLoaded,
    templates,
    currentTemplate,
    templateFormLoaded,
    currentModal,
    currentFeed,
  },
});

export default store;

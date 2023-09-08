import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user/userSlice";
import applications from "./reducers/applications/applicationSlice";
import currentApplication from "./reducers/applications/currentApplicationSlice";
import applicationsLoaded from "./reducers/applications/applicationsLoadedSlice";
import applicationFormLoaded from "./reducers/applications/applicationFormLoadedSlice";
import applicationFeedFilter from "./reducers/applications/applicationFeedFilterSlice";
import contacts from "./reducers/contacts/contactSlice";
import currentContact from "./reducers/contacts/currentContactSlice";
import contactsLoaded from "./reducers/contacts/contactsLoadedSlice";
import contactFormLoaded from "./reducers/contacts/contactFormLoadedSlice";
import templates from "./reducers/templates/templateSlice";
import currentTemplate from "./reducers/templates/currentTemplateSlice";
import contactIsNew from "./reducers/contacts/contactIsNewSlice";
import templatesLoaded from "./reducers/templates/templatesLoadedSlice";
import templateFormLoaded from "./reducers/templates/templateFormLoadedSlice";
import currentModal from "./reducers/structure/currentModalSlice";
import currentFeed from "./reducers/structure/currentFeedSlice";

const store = configureStore({
  reducer: {
    user,
    applications,
    currentApplication,
    applicationsLoaded,
    applicationFormLoaded,
    applicationFeedFilter,
    contacts,
    currentContact,
    contactsLoaded,
    contactFormLoaded,
    templates,
    currentTemplate,
    contactIsNew,
    templatesLoaded,
    templateFormLoaded,
    currentModal,
    currentFeed,
  },
});

export default store;

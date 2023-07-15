import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./reducers/applicationSlice";
import currentApplicationReducer from "./reducers/currentApplicationSlice";
import contactReducer from "./reducers/contactSlice";
import currentModalReducer from "./reducers/currentModalSlice";
import currentContactReducer from "./reducers/currentContactSlice";

const store = configureStore({
  reducer: {
    applicationReducer,
    currentApplicationReducer,
    contactReducer,
    currentContactReducer,
    currentModalReducer,
  },
});

export default store;

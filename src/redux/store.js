import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./reducers/applicationSlice";
import currentApplicationReducer from "./reducers/currentApplicationSlice";
import contactReducer from "./reducers/contactSlice";
import currentModalReducer from "./reducers/currentModalSlice";

const store = configureStore({
  reducer: {
    applicationReducer,
    currentApplicationReducer,
    contactReducer,
    currentModalReducer,
  },
});

export default store;

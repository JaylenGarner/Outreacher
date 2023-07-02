import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./reducers/applicationSlice";
import currentApplicationReducer from "./reducers/currentApplication";
import currentModalReducer from "./reducers/currentModal";

const store = configureStore({
  reducer: {
    applicationReducer,
    currentApplicationReducer,
    currentModalReducer,
  },
});

export default store;

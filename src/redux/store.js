import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./reducers/applicationSlice";

const store = configureStore({
  reducer: {
    applicationReducer,
  },
});

export default store;

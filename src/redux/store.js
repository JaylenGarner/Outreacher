import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./reducers/applicationSlice";
import currentApplicationReducer from "./reducers/currentApplication";
import workflowReducer from "./reducers/workFlowSlice";

const store = configureStore({
  reducer: {
    applicationReducer,
    currentApplicationReducer,
    workflowReducer,
  },
});

export default store;

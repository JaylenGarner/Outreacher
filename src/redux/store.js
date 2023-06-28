import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./reducers/applicationSlice";
import workflowReducer from "./reducers/workFlowSlice";

const store = configureStore({
  reducer: {
    applicationReducer,
    workflowReducer,
  },
});

export default store;

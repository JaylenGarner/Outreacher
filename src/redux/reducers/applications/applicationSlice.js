import { createSlice } from "@reduxjs/toolkit";

export const applications = createSlice({
  name: "applications",
  initialState: {},
  reducers: {
    getApplications: (state, action) => {
      const newState = { ...state };

      action.payload.forEach((application) => {
        newState[application.id] = application;
      });

      return newState;
    },
    createApplication: (state, action) => {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    },
    deleteApplication: (state, action) => {
      const newState = { ...state };
      const application = action.payload;
      delete newState[application.id];
      return newState;
    },
    clearApplications: () => {
      return {};
    },
  },
});

export const {
  getApplications,
  createApplication,
  deleteApplication,
  clearApplications,
} = applications.actions;
export default applications.reducer;

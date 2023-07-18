import { createSlice } from "@reduxjs/toolkit";

export const applications = createSlice({
  name: "applications",
  initialState: {},
  reducers: {
    getApplications: (state, action) => {
      const newState = { ...state };

      action.payload.forEach((application) => {
        newState[application._id] = application;
      });

      return newState;
    },
    createApplication: (state, action) => {
      return {
        ...state,
        [action.payload._id]: action.payload,
      };
    },
    deleteApplication: (state, action) => {
      const newState = { ...state };
      const application = action.payload;
      delete newState[application._id];
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

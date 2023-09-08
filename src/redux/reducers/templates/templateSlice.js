import { createSlice } from "@reduxjs/toolkit";

export const templates = createSlice({
  name: "templates",
  initialState: {},
  reducers: {
    getTemplates: (state, action) => {
      const newState = { ...state };

      action.payload.forEach((template) => {
        newState[template.id] = template;
      });

      return newState;
    },
    createTemplate: (state, action) => {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    },
    deleteTemplate: (state, action) => {
      const newState = { ...state };
      const template = action.payload;
      delete newState[template.id];
      return newState;
    },
    clearTemplates: () => {
      return {};
    },
  },
});

export const { getTemplates, createTemplate, deleteTemplate, clearTemplates } =
  templates.actions;
export default templates.reducer;

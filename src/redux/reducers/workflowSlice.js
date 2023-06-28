import { createSlice } from "@reduxjs/toolkit";

export const workflow = createSlice({
  name: "workflow",
  initialState: {},
  reducers: {
    setWorkflow: (state, action) => {
      state = action.payload;
      return state;
    },
    clearWorkflow: () => {
      return {};
    },
  },
});

export const { setWorkflow, clearWorkflow } = workflow.actions;
export default workflow.reducer;

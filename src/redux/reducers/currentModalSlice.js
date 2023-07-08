import { createSlice } from "@reduxjs/toolkit";

export const currentModal = createSlice({
  name: "currentModal",
  initialState: null,
  reducers: {
    setCurrentModal: (state, action) => {
      state = action.payload;
      return state;
    },
    clearCurrentModal: () => {
      return null;
    },
  },
});

export const { setCurrentModal, clearCurrentModal } = currentModal.actions;
export default currentModal.reducer;

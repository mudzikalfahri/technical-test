import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addToSaved: (state, action) => {
      const added = state.items.find((item) => item === action.payload);
      if (added) state.items = [...state.items];
      else state.items = [...state.items, action.payload];
    },
    removeFromSaved: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addToSaved, removeFromSaved } = savedSlice.actions;

export const selectSaved = (state) => state.saved.items;

export default savedSlice.reducer;

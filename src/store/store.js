import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "../slices/savedSlice";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    saved: savedReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

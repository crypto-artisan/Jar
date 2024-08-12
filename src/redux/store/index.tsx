import { configureStore } from "@reduxjs/toolkit";
import transferReducer from "./slices/transferSlice"; // Adjust the import path as necessary

export function makeStore() {
  return configureStore({
    reducer: {
      transfers: transferReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

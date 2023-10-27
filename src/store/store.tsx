import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "./slices/githubSlice";

/**
 * Create a Redux store using the configureStore function.
 *
 * @remarks
 * This store configuration includes the `githubReducer` in the store's reducers.
 *
 * @param {Object} reducer - Reducers for the store.
 * @returns {Store} The configured Redux store.
 */
const store = configureStore({
  reducer: {
    github: githubReducer, // Include your githubReducer in the store's reducers.
  },
});

// Define TypeScript types for the root state and app dispatch based on the store.
export type RootState = ReturnType<typeof store.getState>; // RootState represents the entire state structure.
export type AppDispatch = typeof store.dispatch; // AppDispatch represents the dispatch function.

export default store;

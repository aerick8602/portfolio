import { configureStore } from "@reduxjs/toolkit";
import fileReducer from './fileslice';  // Adjust the path if necessary

export const Filestore = configureStore({
  reducer: {
    files: fileReducer,  // Use 'files' as the key here
  },
});

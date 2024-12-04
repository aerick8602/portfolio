import { configureStore } from "@reduxjs/toolkit";
import fileReducer from './fileslice'; 

export const Filestore = configureStore({
  reducer: {
    files: fileReducer, 
  },
});

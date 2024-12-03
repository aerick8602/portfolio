import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  activefiles: [],  
};

const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFile: (state, action) => {
      const newFile = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.activefiles.push(newFile); 
    },
    removeFile: (state, action) => {
      state.activefiles = state.activefiles.filter((file) => file.id !== action.payload.id);  // Remove file from the activefiles array
    },
  },
});

export const { addFile, removeFile } = fileSlice.actions; 

export default fileSlice.reducer;

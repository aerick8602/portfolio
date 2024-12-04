import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  activefiles: [],
};

const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFile: (state, action) => {
      const { name, key } = action.payload;
      const existingFile = state.activefiles.find((file) => file.name === name);

      if (!existingFile) {
        const newFile = {
          ...action.payload,
          id: nanoid(),
        };
        state.activefiles.push(newFile);
      } else {
        console.log(`File with name "${name}" already exists.`);
      }
    },
    removeFile: (state, action) => {
      const fileIndex = state.activefiles.findIndex((file) => file.id === action.payload.id);
      if (fileIndex !== -1) {
        const wasActive = state.activefiles[fileIndex].isactive;
        if (wasActive && state.activefiles.length > 1) {
          const newActiveIndex = fileIndex > 0 ? fileIndex - 1 : 1;
          state.activefiles[newActiveIndex].isactive = true;
        }
  
        state.activefiles.splice(fileIndex, 1); 
        console.log("Active Files After Removal:", state.activefiles);  
    
      } else {
        console.log("File not found in active files."); 
      }
    },
    
    setActiveFile: (state, action) => {
      const { id,name } = action.payload;
      state.activefiles = state.activefiles.map((file) =>
        (file.id === id || file.name===name) ? { ...file, isactive: true } : { ...file, isactive: false }
      );
    },
  },
});

export const { addFile, removeFile, setActiveFile } = fileSlice.actions;

export default fileSlice.reducer;

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
      state.activefiles = state.activefiles.filter((file) => file.id !== action.payload.id);
    },
    setActiveFile: (state, action) => {
      state.activefiles = state.activefiles.map((file) =>
        file.id === action.payload.id ? { ...file, isactive: true } : { ...file, isactive: false }
      );
    },
  },
});

export const { addFile, removeFile, setActiveFile } = fileSlice.actions;

export default fileSlice.reducer;

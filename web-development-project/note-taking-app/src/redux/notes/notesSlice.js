import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    activeColors: '#000000',
    filtered: '',
  },
  reducers: {
    changeActiveColors: (state, action) => {
      state.activeColors = action.payload;
    },
    addNote: (state, action) => {
      state.items.push({ title: action.payload, color: state.activeColors });
    },
    changeFilter: (state, action) => {
      state.filtered = action.payload;
    },
  },
});

export const filteredNotes = (state) => {
  if (state.notes.filtered === '') {
    return state.notes.items;
  } else {
    const regex = new RegExp(`${state.notes.filtered}`, 'g');

    return state.notes.items.filter((note) => note.title.match(regex));
  }
};

export const selectNotes = (state) => state.notes.items;

export const { changeActiveColors, addNote, changeFilter } = todosSlice.actions;
export default todosSlice.reducer;
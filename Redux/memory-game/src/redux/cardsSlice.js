import { createSlice } from '@reduxjs/toolkit';

const items = [
  'angular2',
  'vue',
  'react',
  'grunt',
  'phantomjs',
  'ember',
  'babel',
  'ionic',
  'gulp',
  'meteor',
  'yeoman',
  'yarn',
  'nodejs',
  'bower',
  'browserify',
];
let duplicatedItems = [];
let randomizedItem = [];
let finalizedItems = [];

const start = () => {
  duplicatedItems = items.concat(items);
  randomizedItem = shuffle(duplicatedItems);

  finalizedItems = randomizedItem.map((name, i) => {
    return {
      name,
      index: i,
      close: true,
      complete: false,
      fail: false,
    };
  });
};

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

start();

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: finalizedItems,
    openedItems: [],
  },
  reducers: {
    handleClick: (state, action) => {
      const { name, index } = action.payload;
      const item = { name, index };
      state.openedItems.push(item);
      state.items[index].close = false;
    },
    check: (state, action) => {
      if (state.openedItems.length === 2) {
        if (
          state.openedItems[0].name === state.openedItems[1].name &&
          state.openedItems[0].index !== state.openedItems[1].index
        ) {
          state.items[state.openedItems[0].index].complete = true;
          state.items[state.openedItems[1].index].complete = true;
        } else {
          state.items[state.openedItems[0].index].close = true;
          state.items[state.openedItems[1].index].close = true;
        }
        state.openedItems = [];
      }
    },
  },
});

export const { check, handleClick } = cardsSlice.actions;

export default cardsSlice.reducer;
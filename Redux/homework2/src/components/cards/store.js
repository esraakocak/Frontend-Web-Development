import { configureStore } from "@reduxjs/toolkit";

import cardsSlice from "./cards/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
});
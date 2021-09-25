import { configureStore } from "@reduxjs/toolkit";
import textSlice from "../Slice/textSlice";

export const store = configureStore({
  reducer: {
    text: textSlice,
  },
});
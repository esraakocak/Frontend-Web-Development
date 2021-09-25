import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk(
  "text/getText",
  
  async ({ number, format }) => {
    const res = await axios.get(
      `https://baconipsum.com/api/?type=all-meat&paras=${number}&format=${format}`
    );
    return res.data;
  }
);
const textSlice = createSlice({
  name: "paragraph",
  initialState: {
    paragraph: [],
    newParagraph: [],
    type: "",
  },
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
      state.newParagraph = [...state.paragraph];
    },
  },
  extraReducers: {
    [fetchApi.fulfilled]: (state, action) => {
      state.paragraph = [action.payload];
    },
  },
});
export const useParagraph = (state) => state.text.paragraph;

export const { changeType } = textSlice.actions;
export default textSlice.reducer;
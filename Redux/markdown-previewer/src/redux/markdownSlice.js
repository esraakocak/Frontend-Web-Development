import { createSlice } from "@reduxjs/toolkit";

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    text: "",
    preview: false,
    textPreview: `Heading \n =======  \n Sub-heading \n ----------- \n ### Another deeper heading \n
    Paragraphs are separated by a blank line. \n 
    Leave 2 spaces at the end of a line to do a line break \n 
    Text attributes *italic*, **bold**, 'monospace', ~~strikethrough~~ .\n
    Shopping list: \n* apples \n* oranges \n* pears \n
    Numbered list: \n1. apples \n2. oranges \n3. pears \n
    The rain---not the reign---in Spain. \n
    *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`,
  },
  reducers: {
    markdownPreviewer: (state, action) => {
      state.text = action.payload;
    },
    changePreview: (state, action) => {
      state.preview = !state.preview;
    },
  },
});

export const { markdownPreviewer, changePreview } = markdownSlice.actions;
export default markdownSlice.reducer;
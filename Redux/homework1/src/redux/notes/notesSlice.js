import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        text: "Officia quis do voluptate cillum nulla veniam enim nulla id velit ipsum qui. Commodo laborum tempor in cupidatat duis minim excepteur ipsum duis exercitation deserunt nulla. Voluptate labore enim laboris eu ut incididunt sint eiusmod ex anim sint velit aute nisi. Ut nisi aute labore magna proident sint mollit. Veniam nostrud culpa officia aliquip quis adipisicing labore consectetur veniam do nostrud.",
        color: "#ffe25e",
      },
      {
        text: "Dolore commodo aliquip anim reprehenderit fugiat. Irure nisi sit aute excepteur nostrud. Lorem quis cupidatat dolore sit dolore et id fugiat voluptate ad commodo velit.",
        color: "#b9ff99",
      },
      {
        text: "Ea mollit consectetur sint pariatur. Nostrud dolore nostrud ut ullamco aute ex ullamco commodo officia. Deserunt ea elit tempor consequat labore pariatur amet nostrud ex. Qui quis est enim excepteur culpa. Excepteur nulla ipsum esse consequat commodo dolor. Enim fugiat excepteur adipisicing tempor ullamco ullamco sunt exercitation culpa ad veniam. In incididunt mollit anim occaecat Lorem consectetur in nisi ullamco quis eiusmod labore in.",
        color: "#b0e5ff",
      },
      {
        text: "Officia enim nostrud quis cupidatat cupidatat ullamco labore qui cupidatat id. Pariatur quis non id ipsum amet. Magna ex sit ullamco quis adipisicing aliqua nisi ipsum sit cillum. Eu nisi fugiat id consectetur tempor. Occaecat sit pariatur deserunt amet amet tempor. Mollit ipsum eu ex ex eu eu sunt.",
        color: "#ffbad9",
      },
      {
        text: "Laborum occaecat veniam nulla magna dolore id sint duis do ipsum sit esse mollit. Ea esse et ut velit minim cillum id id. Qui ut qui exercitation exercitation ullamco. Quis id labore occaecat eiusmod ad aute. Veniam quis tempor aute minim duis. Enim sunt ullamco consequat amet sint anim anim laborum commodo cillum consequat. Mollit officia mollit ea incididunt nisi est.",
        color: "#ffc073",
      },
    ],
    text: "",
    color: "#f1f1f1",
    searchInput: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { addNote, setColor, setText, setSearchInput } =
  notesSlice.actions;
export default notesSlice.reducer;
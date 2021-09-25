import "./App.css";
import Notes from "./components/Notes";
import SearchBar from "./components/SearchBar";
import TextField from "./components/TextField";

function App() {
  return <div className="App container" style={{marginTop:"3rem"}}>
    <SearchBar></SearchBar>
    <TextField></TextField>
    <Notes></Notes>
  </div>;
}

export default App;
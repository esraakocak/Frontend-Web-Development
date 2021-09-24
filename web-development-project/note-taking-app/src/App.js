import './App.css';
import Search from './component/Search';
import Content from './component/Content';
import NoteList from './component/NoteList';

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Notes App</h1>
      <Search />
      <Content />
      <NoteList />
    </div>
  );
}

export default App;
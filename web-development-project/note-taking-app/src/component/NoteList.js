import { useSelector } from 'react-redux';
import { filteredNotes } from '../redux/notes/notesSlice';
import NoteListItem from './NoteListItem';

function NoteList() {
  const notes = useSelector(filteredNotes);
  return (
    <div className='noteList'>
      {notes.map((note, i) => (
        <NoteListItem key={i} note={note.title} color={note.color} />
      ))}
    </div>
  );
}

export default NoteList;
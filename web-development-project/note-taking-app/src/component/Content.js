import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, changeActiveColors } from '../redux/notes/notesSlice';

function Content() {
  const activeColors = useSelector((state) => state.notes.activeColors);
  const [colors, setColors] = useState(activeColors);
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActiveColors(colors));
  }, [dispatch, colors]);

  const handleSubmit = () => {
    dispatch(addNote(note));
    setNote('');
  };

  return (
    <div className='notesContainer'>
      <textarea
        className='notesArea'
        placeholder='write a note'
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className='notesFooter'>
        <input
          type='color'
          value={colors}
          onChange={(e) => setColors(e.target.value)}
        />

        <button className='addBtn' onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Content;
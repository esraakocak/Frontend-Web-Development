import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/notes/notesSlice';

function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = (title) => {
    setSearch(title);

    dispatch(changeFilter(title));
  };

  return (
    <input
      className='searchInput'
      value={search}
      onChange={(e) => handleChange(e.target.value)}
      placeholder='Search...'
    />
  );
}

export default Search;
import React from 'react';

function NoteListItem({ note, color }) {
  return (
    <div className='noteListItem' style={{ backgroundColor: color }}>
      {note}
      <span></span>
    </div>
  );
}

export default NoteListItem;
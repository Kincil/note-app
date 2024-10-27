import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchive={note.archived} {...note} />
      ))}
    </div>
  );
}

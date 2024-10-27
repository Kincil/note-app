import React from 'react';
import DeleteNote from './NoteDelete';
import ArchiveNote from './NoteArchive';

export default function NoteItemAction({ id, onDelete, onArchive, isArchive }) {
  return (
    <div className="note-item__action">
      <DeleteNote id={id} onDelete={onDelete} />
      <ArchiveNote id={id} onArchive={onArchive} isArchive={isArchive} />
    </div>
  );
}

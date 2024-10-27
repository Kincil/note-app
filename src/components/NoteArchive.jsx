import React from 'react';

export default function ArchiveNote({ id, onArchive, isArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {isArchive ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}

import React from 'react';

export default function DeleteNote({ id, onDelete }) {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
}

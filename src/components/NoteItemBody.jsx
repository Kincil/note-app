import React from 'react';

export default function NoteItemBody({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

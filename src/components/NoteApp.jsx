import React from 'react';
import { getInitialData } from '../utils/index';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    };
    // bind
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  // Method Event handler
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
    this.setState({ notes });
  }

  onSearchHandler(searchQuery) {
    this.setState(() => {
      return {
        search: searchQuery,
      };
    });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const unArchive = this.state.notes.filter((note) => note.archived === false);
    const archive = this.state.notes.filter((note) => note.archived === true);

    const filteredNotes = unArchive.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));

    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <NoteSearch onSearch={this.onSearchHandler} />
          </div>
        </div>
        <div className="note-app__body">
          <div className="note-input">
            <h2>Buat Catatan</h2>
            <NoteInput addNotes={this.onAddNotesHandler} />
          </div>
          <h2>Catatan Aktif</h2>
          {this.state.notes.filter((note) => !note.archived).length > 0 ? (
            <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
          ) : (
            <p className="notes-list__empty-message"> Tidak ada Catatan...</p>
          )}
          <h2>Arsip</h2>
          {this.state.notes.filter((note) => note.archived).length > 0 ? <NoteList notes={archive} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <p className="notes-list__empty-message">Tidak Ada Arsipan...</p>}
        </div>
      </>
    );
  }
}

import React from 'react';

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }
  // Method event handler
  onTitleChange(event) {
    const newLimit = event.target.value;
    if (newLimit.length <= this.state.charLimit) {
      this.setState({ title: newLimit });
    }
  }

  onBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitChange(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    alert('Catatan berhasil ditambahkan');
  }

  render() {
    const limit = this.state.charLimit - this.state.title.length;

    return (
      <form onSubmit={this.onSubmitChange}>
        <p className="note-input__title__char-limit">Sisa Karakter: {limit}</p>
        <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." onChange={this.onTitleChange} value={this.state.title} required />
        <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." onChange={this.onBodyChange} value={this.state.body} required></textarea>
        <button type="submit">Buat Catatan</button>
      </form>
    );
  }
}

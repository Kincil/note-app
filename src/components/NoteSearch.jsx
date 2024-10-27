import React from 'react';

export default class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };

    this.onSearchhandler = this.onSearchhandler.bind(this);
  }

  onSearchhandler(event) {
    this.setState(
      () => {
        return {
          searchQuery: event.target.value,
        };
      },
      () => this.props.onSearch(this.state.searchQuery)
    );
  }

  render() {
    return <input type="text" placeholder="Cari Catatan..." onChange={this.onSearchhandler} value={this.state.searchQuery} />;
  }
}

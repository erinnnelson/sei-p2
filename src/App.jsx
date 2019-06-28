import React from 'react';
import './App.css';
import { Link, Route, } from 'react-router-dom';
import { searchSongByTitle, getSongById, } from './services/api-helper';
import Header from './components/Header';
import PlaylistBuilder from './components/PlaylistBuilder';
import SavedPlaylists from './components/SavedPlaylists';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      newPlaylist: [],
      search: '',
      isSearchLoading: false
    }
  }

  componentDidMount() {
    // await getSongById('EqnWLK')
    // await searchSongByTitle('hook');
  }

  handleSearchChange = (ev) => {
    this.setState({
      search: ev.target.value
    });
  }

  handleSearchSubmit = async (ev) => {
    ev.preventDefault();
    if (!this.state.search) {
      return;
    }

    let query = this.state.search;
    this.setState({
      search: '',
      isSearchLoading: true
    });
    let searchResults = await searchSongByTitle(query);
    this.setState({
      searchResults: searchResults.data.search,
      isSearchLoading: false
    })
    console.log(this.state.searchResults)
  }

  render() {
    let isNewPlaylistEmpty = !this.state.newPlaylist.length;

    return (
      <>
        <header>
          <Header isNewPlaylistEmpty={isNewPlaylistEmpty} />
        </header>
        <main>
          <Route path='/' exact render={() =>
            <PlaylistBuilder
              search={this.state.search}
              isSearchLoading={this.state.isSearchLoading}
              searchResults={this.state.searchResults}
              handleSearchChange={this.handleSearchChange}
              handleSearchSubmit={this.handleSearchSubmit}
            />} />
          <Route path='/saved' render={() => <SavedPlaylists />} />
        </main>
        <footer>
          <Footer />
        </footer>
      </>

    );
  }
}

export default App;
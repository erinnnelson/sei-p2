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
      search: '',
      isSearchLoading: false,
      newPlaylist: {
        songs: [],
        title: 'New Playlist'
      }

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
    });
  }

  handleAddSong = (newSong) => {
    let bpmSort = [...this.state.newPlaylist.songs, newSong].sort((a, b) => {
      let temp1 = { ...a };
      let temp2 = { ...b };
      temp1.tempo = a.tempo < 101 ? a.tempo * 2 : a.tempo
      temp2.tempo = b.tempo < 101 ? b.tempo * 2 : b.tempo
      return temp1.tempo - temp2.tempo;
    })
    this.setState({
      newPlaylist: {
        songs: bpmSort
      }
    });
  }

  handleDeleteSong = (songId) => {
    console.log(this.state.newPlaylist.songs)
    let filteredSong = [...this.state.newPlaylist.songs].filter((song) => (songId !== song.id))
    this.setState(prevState => ({
      newPlaylist: {
        songs: filteredSong
      }
    }));
    console.log(this.state.newPlaylist.songs)
  }

  render() {
    let isNewPlaylistEmpty = !this.state.newPlaylist.songs.length;

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
              newPlaylist={this.state.newPlaylist}
              handleSearchChange={this.handleSearchChange}
              handleSearchSubmit={this.handleSearchSubmit}
              handleAddSong={this.handleAddSong}
              handleDeleteSong={this.handleDeleteSong}
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
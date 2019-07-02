import React from 'react';
import './App.css';
import { Route, } from 'react-router-dom';
import { searchSongByTitle, getSongById, } from './services/api-helper';
import Header from './components/Header';
import PlaylistBuilder from './components/PlaylistBuilder';
import SavedPlaylists from './components/SavedPlaylists';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchCheck: '',
      searchResults: [],
      search: '',
      isSearchLoading: false,
      newPlaylist: {
        songs: [],
        title: 'New Playlist',
        editTitle: false
      }

    }
  }

  handleSearchChange = (ev) => {
    this.setState({
      search: ev.target.value
    });
  }

  handleSearchSubmit = async (ev) => {
    ev.preventDefault();
    if (!this.state.search || this.state.search.split(' ')[0] === '') {
      this.setState({
        searchCheck: 'Please enter a song title',
        searchResults: [],
        search: ''
      })
      return;
    }
    let query = this.state.search;
    this.setState({
      search: '',
      searchCheck: 'searching',
      isSearchLoading: true,
      searchResults: []
    });
    let searchResults = await searchSongByTitle(query);
    if (searchResults.error) {
      this.setState({
        isSearchLoading: false,
        searchCheck: 'api is down'
      })
    } else
      if (searchResults.data.search.error) {
        this.setState({
          isSearchLoading: false,
          searchCheck: 'No Results'
        })
      } else {
        this.setState({
          isSearchLoading: false,
          searchCheck: '',
          searchResults: searchResults.data.search
        });
      }
  }

  handleAddSong = (newSong) => {
    let bpmSort = [...this.state.newPlaylist.songs, newSong].sort((a, b) => {
      let temp1 = { ...a };
      let temp2 = { ...b };
      temp1.tempo = a.tempo < 101 ? a.tempo * 2 : a.tempo
      temp2.tempo = b.tempo < 101 ? b.tempo * 2 : b.tempo
      return temp1.tempo - temp2.tempo;
    })
    this.setState(prevState => ({
      newPlaylist: {
        songs: bpmSort,
        title: prevState.newPlaylist.title,
        editTitle: prevState.newPlaylist.editTitle
      }
    }));
  }

  handleDeleteSong = (songId) => {
    let filteredSong = [...this.state.newPlaylist.songs].filter((song) => (songId !== song.id))
    this.setState(prevState => ({
      newPlaylist: {
        songs: filteredSong,
        title: prevState.newPlaylist.title,
        editTitle: prevState.newPlaylist.editTitle

      }
    }));
  }

  handleRetitleClick = () => {
    this.setState(prevState => ({
      newPlaylist: {
        songs: prevState.newPlaylist.songs,
        title: prevState.newPlaylist.title,
        editTitle: true

      }
    }));
  }

  handleRetitleChange = (ev) => {
    let titleChange = ev.target.value;
    this.setState(prevState => ({
      newPlaylist: {
        songs: prevState.newPlaylist.songs,
        title: titleChange,
        editTitle: prevState.newPlaylist.editTitle
      }
    }));
  }

  handleClickOutside = () => {
    this.handleRetitleSubmit();
  }

  handleRetitleSubmit = () => {
    if (!this.state.newPlaylist.title || this.state.newPlaylist.title.split(' ')[0] === '') {
      this.setState(prevState => ({
        newPlaylist: {
          songs: prevState.newPlaylist.songs,
          title: 'New Playlist',
          editTitle: false
        }
      }));
    } else {
      this.setState(prevState => ({
        newPlaylist: {
          songs: prevState.newPlaylist.songs,
          title: prevState.newPlaylist.title,
          editTitle: false

        }
      }));
    }
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
              searchCheck={this.state.searchCheck}
              handleRetitleChange={this.handleRetitleChange}
              handleRetitleSubmit={this.handleRetitleSubmit}
              handleRetitleClick={this.handleRetitleClick}
              handleClickOutside={this.handleClickOutside}
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
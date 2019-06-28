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
      newPlaylist: []
    }
  }

  componentDidMount = async () => {
    // await getSongById('EqnWLK')
    // await searchSongByTitle('hook');
  }

  render() {
    let isNewPlaylistEmpty = !this.state.newPlaylist.length;

    return (
      <>
        <header>
          <Header isNewPlaylistEmpty={isNewPlaylistEmpty} />
        </header>
        <main>
          <Route path='/' exact render={() => <PlaylistBuilder />} />
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
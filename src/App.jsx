import React from 'react';
import './App.css';
// import { Link, Route, } from 'react-router-dom'
import { searchSongByTitle, getSongById, } from './services/api-helper'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount = async () => {
    await getSongById('EqnWLK')
  }

  render() {

    return (
      <div>
        <header>
          <h1>BeatMyRun</h1>
        </header>
      </div>
    );
  }
}

export default App;
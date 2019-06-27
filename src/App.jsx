import React from 'react';
import './App.css';
// import { Link, Route, } from 'react-router-dom'
import { searchSong, getSong, } from './services/api-helper'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount = async () => {
    await searchSong('You Need Calm Down')
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
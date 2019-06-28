import React from 'react'
import SongCard from './SongCard'

export default class PlaylistCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }
  render() {
    return (
      <div>
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    );
  }
}
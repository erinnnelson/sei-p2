import React from 'react';
import { Link, } from 'react-router-dom'

export default (props) => {
  return(
    <nav>
      <Link to='/'>{props.isNewPlaylistEmpty ? 'New Playlist' : "Current Playlist"}</Link>
      <Link to='/saved'>Saved Playlists</Link>
    </nav>
  )
}
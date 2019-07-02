import React from 'react'

export default (props) => {
  return (

    <div id="playlist-title-changer">
      {props.newPlaylist.editTitle ?
        <form onSubmit={props.handleRetitleSubmit}>
          <input
            autoFocus
            id="change-playlist-title"
            type="text"
            value={props.newPlaylist.title}
            placeholder="New Playlist"
            onChange={props.handleRetitleChange}
          />
        </form>
        : <p id="playlist-title" onClick={props.handleRetitleClick}>{props.newPlaylist.title}</p>}
    </div>
  );
}
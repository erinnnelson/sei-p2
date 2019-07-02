import React from 'react'
import onClickOutside from "react-onclickoutside"


function PlaylistTitle (props) {
  return (

    <div id="playlist-title-changer">
      {props.newPlaylist.editTitle ?
        <form onSubmit={props.handleRetitleSubmit} onClickOutside={props.handleClickOutside}>
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

// npm found: https://www.npmjs.com/package/react-onclickoutside
export default onClickOutside(PlaylistTitle);
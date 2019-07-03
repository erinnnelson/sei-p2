import React from 'react'
import onClickOutside from "react-onclickoutside"


function PlaylistTitle(props) {
  return (

    <div id="playlist-title-changer">
      {props.newPlaylist.editTitle ?
        <form autocomplete="off" onSubmit={props.handleRetitleSubmit} onClickOutside={props.handleClickOutside}>
          <input
            autocomplete="off"
            autoFocus
            id="change-playlist-title"
            type="text"
            value={props.newPlaylist.title}
            onChange={props.handleRetitleChange}
          />
        </form>
        : <p id={props.newPlaylist.title === "New Playlist"
          ?
          "greyed-playlist-title"
          :
          "playlist-title"} onClick={props.handleRetitleClick}>{props.newPlaylist.title}</p>
      }
    </div>
  );
}

// npm found: https://www.npmjs.com/package/react-onclickoutside
export default onClickOutside(PlaylistTitle);
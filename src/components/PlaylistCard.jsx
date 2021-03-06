import React from 'react'
import PlaylistSongCard from './PlaylistSongCard'
import PlaylistTitle from './PlaylistTitle'

export default (props) => {
  // console.log(props.songs)
  return (
    <>
      <div id="playlist-header">
        <PlaylistTitle
          newPlaylist={props.newPlaylist}
          handleRetitleChange={props.handleRetitleChange}
          handleRetitleSubmit={props.handleRetitleSubmit}
          handleRetitleClick={props.handleRetitleClick}
          handleClickOutside={props.handleClickOutside}
        />
        {(props.newPlaylist.songs.length !== 0) && <button id="clear-playlist" onClick={props.handleClearPlaylist}>X</button>}
      </div>
      {props.newPlaylist.songs.map(song =>
        <div
          key={song.id} className="playlist-song-card" onClick={() => props.handleDeleteSong(song.id)}>
          <PlaylistSongCard
            song={song}
          />
        </div>
      )}
    </>
  );
}

import React from 'react'
import PlaylistSongCard from './PlaylistSongCard'
import PlaylistTitle from './PlaylistTitle'

export default (props) => {
  // console.log(props.songs)
  return (
    <>
      <PlaylistTitle
        newPlaylist={props.newPlaylist}
        handleRetitleChange={props.handleRetitleChange}
        handleRetitleSubmit={props.handleRetitleSubmit}
        handleRetitleClick={props.handleRetitleClick}
      />
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

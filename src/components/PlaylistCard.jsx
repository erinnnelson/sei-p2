import React from 'react'
import PlaylistSongCard from './PlaylistSongCard'

export default (props) => {
  // console.log(props.songs)
  return (
    <>
      <input
        type="text"
        placeholder="New Playlist"
      />
      {props.newPlaylist.songs.map(song =>
        <div key={song.id} className="song-card">
          <PlaylistSongCard
            song={song}
          />
        </div>
      )}
    </>
  );
}

import React from 'react'
import SongCard from './SongCard'

export default (props) => {
  // console.log(props.songs)
  return (
    <>
      {props.songs.map(song =>
        <div key={song.id} className="song-card">
          <SongCard
            song={song}
            isSearchResult={false}
          />
        </div>
      )}
    </>
  );
}

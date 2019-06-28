import React from 'react'
import SongCard from './SongCard'

export default (props) => {
  return (
    <>
      {props.searchResults.map(song =>
        
        <div key={song.id} className="song-card" onClick={() => props.handleAddSong(song.id)}>
        <SongCard 
          song={song}
          isSearchResult={true}
        />
      </div>)}
    </>
  );
}
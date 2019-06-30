import React from 'react'
import SongCard from './SongCard'

export default (props) => {
  return (
    <>
      {props.searchResults.map(song =>
        
        <div className="song-block" key={song.id}>
        <SongCard 
          song={song}
          isSearchResult={true}
          handleAddSong={props.handleAddSong}
        />
      </div>)}
    </>
  );
}
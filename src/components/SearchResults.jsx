import React from 'react'
import SongCard from './SongCard'
import SearchCheck from './SearchCheck'

export default (props) => {
  return (
    <>
      <SearchCheck searchCheck={props.searchCheck} />
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
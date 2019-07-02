import React from 'react'
import SongCard from './SongCard'

export default (props) => {
  return (
    <>
      <div className="searchCheck">
        <p id="loading">{props.searchCheck === "searching" && props.searchCheck}</p>
        <p id="negative-search">{props.searchCheck !== "searching" && props.searchCheck}</p>
      </div>
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
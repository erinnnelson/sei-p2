import React from 'react'
import SearchBox from './SearchBox'
import PlaylistEditor from './PlaylistEditor';

export default (props) => {
  return (
    <div id='playlist-builder'>
      <SearchBox
        search={props.search}
        searchResults={props.searchResults}
        handleSearchChange={props.handleSearchChange}
        handleSearchSubmit={props.handleSearchSubmit}
        handleAddSong={props.handleAddSong}
        searchCheck={props.searchCheck}
      />
      <PlaylistEditor
        newPlaylist={props.newPlaylist}
        handleDeleteSong={props.handleDeleteSong}
        handleRetitleChange={props.handleRetitleChange}
        handleRetitleSubmit={props.handleRetitleSubmit}
        handleRetitleClick={props.handleRetitleClick}
        handleClickOutside={props.handleClickOutside}
      />
    </div>
  );
}
import React from 'react'
import SearchBox from './SearchBox'
import PlaylistEditor from './PlaylistEditor';

export default (props) => {
  return (
    <div id='playlist-builder'>
      <SearchBox search={props.search} handleSearchChange={props.handleSearchChange} handleSearchSubmit={props.handleSearchSubmit} />
      <PlaylistEditor />
    </div>
  );
}
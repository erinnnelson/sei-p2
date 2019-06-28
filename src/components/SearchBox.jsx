import React from 'react'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'


export default (props) => {
  return (
    <div id="search-box" className="building-blocks">
      <SearchInput
        search={props.search}
        handleSearchChange={props.handleSearchChange}
        handleSearchSubmit={props.handleSearchSubmit}
      />
      <SearchResults
        searchResults={props.searchResults}
        handleAddSong={props.handleAddSong}
      />
      
    </div>
  );
}
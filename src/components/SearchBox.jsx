import React from 'react'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'


export default () => {
  return (
    <div id="search-box" className="building-blocks">
      <SearchInput />
      <SearchResults />
      
    </div>
  );
}
import React from 'react'
import SearchBox from './SearchBox'
import PlaylistEditor from './PlaylistEditor';

export default () => {
  return (
    <div id='playlist-builder'>
      <SearchBox />
      <PlaylistEditor />
    </div>
  );
}
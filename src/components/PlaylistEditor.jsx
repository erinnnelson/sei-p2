import React from 'react'
import PlaylistCard from './PlaylistCard'

export default (props) => {
  return (
    <div id="playlist-editor" className="building-blocks">
      <PlaylistCard
        newPlaylist={props.newPlaylist}
        canEdit={true}
      />
    </div>
  );
}
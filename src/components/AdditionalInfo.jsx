import React from 'react'
import art_default from '../assets/art_default.jpg'
import AddRemoveButton from './AddRemoveButton'

export default (props) => {
  return (
    <div className="additional-info">
      <img className="album-art" src={props.song.img || art_default} alt="album art" />
      <div className="deciders">
        <p>{props.song.tempo || '---'} BPM</p>
        <AddRemoveButton
          handleAddSong={props.handleAddSong}
          add={props.isSearchResult}
          song={props.song}
        />
      </div>
    </div>
  );
}
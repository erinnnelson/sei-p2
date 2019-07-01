import React from 'react'

export default (props) => {
  return (
    <div className="playlist-song-info">
      <div className="playlist-top">
      <p>{props.song.title.length <= 21 ? props.song.title : `${props.song.title.slice(0, 18)}...` || 'Unkown Title'}</p>
        <p>{props.song.tempo || '???'}</p>
        </div>
      <p className="artist-name">{props.song.name.length <= 30 ? props.song.name : `${props.song.name.slice(0, 27)}...` || 'Unkown'}</p>
    </div>
  );
}
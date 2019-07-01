import React from 'react'

export default (props) => {
  return (
    <div className="playlist-song-info">
      <p>{props.song.title.length <= 23 ? props.song.title : `${props.song.title.slice(0, 20)}...` || 'Unkown Title'}</p>
      <p>{props.song.title.tempo || 'Unkown'}</p>
    </div>
  );
}
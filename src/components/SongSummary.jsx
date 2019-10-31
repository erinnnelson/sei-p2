import React from 'react'

export default (props) => {
  return (
    <>
      <p>{(props.showFullInfo || props.song.title.length <= 30 ? props.song.title : `${props.song.title.slice(0, 27)}...`) || 'Unkown Title'}</p>
      <p className="artist-name">{(props.showFullInfo || props.song.artist.name.length <= 30 ? props.song.artist.name : `${props.song.artist.name.slice(0, 27)}...`) || 'Unknown'}
      </p>
    </>
  );
}
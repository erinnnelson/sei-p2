import React from 'react'

export default (props) => {
  return (
    <>
      <p>{(props.showFullInfo || props.song.title.length <= 30 ? props.song.title : `${props.song.title.slice(0, 27)}...`) || 'Unkown Title'}</p>
      <p className="artist-name">{(props.showFullInfo || props.song.name.length <= 30 ? props.song.name : `${props.song.name.slice(0, 27)}...`) || 'Unknown'}
      </p>
    </>
  );
}
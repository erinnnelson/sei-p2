import React from 'react'

export default (props) => {
  return (
    <>
      <p>{(props.showFullInfo || props.song.title.length <= 25 ? props.song.title : `${props.song.title.slice(0, 22)}...`) || 'Unkown Title'}</p>
      <p>{(props.showFullInfo || props.song.name.length <= 25 ? props.song.name : `${props.song.name.slice(0, 22)}...`) || 'Artist'}
      </p>
    </>
  );
}
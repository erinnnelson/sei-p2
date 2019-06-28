import React from 'react'

export default (props) => {
  return (
    <>
      <p>{props.song.title}</p>
      <p>by {props.song.name}</p>
      <p>{props.song.tempo}</p>
    </>
  );
}
import React from 'react'
import art_default from '../assets/art_default.jpg'

export default (props) => {
  return (
    <>
      <img className="album-art" src={props.song.img || art_default} />
      <p>Tempo: {props.song.tempo || 'Unknown'}</p>
    </>
  );
}
import React from 'react';

export default (props) => {
  // console.log(props.song)
  return (
    <>
      {props.add ?
        <button className="add-button" onClick={() => props.handleAddSong(props.song.id)}>+</button>
          :
          <button className="remove-button">-</button>}
    </>
  );
}
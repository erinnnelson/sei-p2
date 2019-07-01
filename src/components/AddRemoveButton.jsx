import React from 'react';

export default (props) => {
  // console.log(props.song)
  return (
    <>
      {props.add ?
        <button className="add-button" onClick={(ev) => props.handleAddSong(props.song)}>Add</button>
          :
          <button className="remove-button">Remove</button>}
    </>
  );
}
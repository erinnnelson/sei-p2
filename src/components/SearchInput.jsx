import React from 'react'

export default (props) => {
  return (
    <form onSubmit={props.handleSearchSubmit}>
      <input
        autoFocus
        name="search"
        type="text"
        placeholder="Song Name..."
        value={props.search}
        onChange={props.handleSearchChange}
      />
    </form>
  );
}
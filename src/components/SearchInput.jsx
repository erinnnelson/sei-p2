import React from 'react'

export default (props) => {
  return (
    <form autoComplete="off" onSubmit={props.handleSearchSubmit}>
      <input
        autoComplete="off"
        id="search-field" 
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
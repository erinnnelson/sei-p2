import React from 'react'

export default (props) => {
  return (
    <form onSubmit={props.handleSearchSubmit}>
      <input
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
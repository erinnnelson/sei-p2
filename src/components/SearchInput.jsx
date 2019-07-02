import React from 'react'

export default (props) => {
  return (
    <form autocomplete="off" onSubmit={props.handleSearchSubmit}>
      <input
        autocomplete="off"
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
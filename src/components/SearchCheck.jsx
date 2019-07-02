import React from 'react'
import error from '../assets/error.png'


export default (props) => {
  return (
    <div className="search-check">
      <p id="loading">{props.searchCheck === "searching" && props.searchCheck}</p>
      <p id="empty-search-results">{props.searchCheck === "No Results" && props.searchCheck}</p>
      <p id="empty-search-field">{props.searchCheck === "Please enter a song title" && props.searchCheck}</p>
      {props.searchCheck === "api is down" &&
        <div id="broken-api">
          <p>The system is down</p>
          <br />
          <img id="api-error-img" src={error} />
          <p>Try again later</p>
        </div>
      }
    </div>
  );
}
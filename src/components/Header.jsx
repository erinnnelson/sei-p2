import React from 'react';
import { Link, Route, } from 'react-router-dom'
import NavBar from './NavBar'

export default (props) => {
  return(
    <>
      <Link id="site-title" to='/'>BeatMyRun</Link>
      <NavBar isNewPlaylistEmpty={props.isNewPlaylistEmpty}/>
    </>
  )
}
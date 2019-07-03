# Project Overview <img src="assets/panda.gif" alt="panda gif" width="100"/>

This is the NYC General Assembly Software Engineerning Immersive, Panda Cohort's "Project 2," created by Erinn Nelson.

## Project Description

The purpose of this app is to build a music playlist for running and exercise. Users may search for and receive information about songs through use of the [GetSongBPM](https://getsongbpm.com/api) API. Once displayed in search results, songs may be added to a playlist and sorted by tempo.

**Site Link:** [Beat My Run](http://beatmyrun.surge.sh/)

Created with [React](https://reactjs.org/).

## Wireframes

**Desktop View:**

<img src="wireframes/wf_dt1.png" alt="wireframe" width="606"/>
<img src="wireframes/wf_dt2.png" alt="mobile wireframe" width="606"/>

**Mobile View:**

<img src="wireframes/wf_mb1.png" alt="wireframe" width="200"/> <img src="wireframes/wf_mb2.png" alt="mobile wireframe" width="200"/> <img src="wireframes/wf_mb3.png" alt="mobile wireframe" width="200"/>

### MVP/PostMVP

**MVP**

* App can successfully call API for song info based on a title input

* Results from search can be rendered on page as SongCards

* User may choose SongCards to add to a playlist

* User may remove SongsCards and clear playlist

* Song Cards can be sorted by tempo

**PostMVP**

* Visual indicators for Tempo in relation to running speed

* Playlists can be titled, saved and stored to local storage 

* Song Cards can be sorted manually

* SongCards in playlists can be expanded for more info

* Proved general info about running and healthy pacing

## React Component Hierarchy

* **\<App />**
    * \<header>
        * 'site title'
        * \<nav>
          * \<Link to='/'>
          * \<Link to='/playlists>
    * \<main>
      * **\<PlaylistBuilder />**
        * **\<SearchBox />**
          * **\<SearchInput />**
            * \<input type='text'>
          * **\<SearchResults />**
            * **\<SongCard />**
              * \<img src='album photo'>
              * 'title, artist, tempo, length'
              * \<button onClick='add/remove/edit'>
        * **\<PlaylistEditor />**
          * **\<PlaylistCard/>**
            * 'playlist title, length'
            * \<button onClick='clear/remove'>
            * **\<SongCard />**
              * \<img src='album photo'>
              * 'song title, artist, tempo, length'
              * \<button onClick='add/remove/edit'>
          * \<button onClick='sort'>
          * \<button onClick='save'>
      * **\<SavedPlaylists />**
        * **\<PlaylistCard />**
          * 'playlist title, length'
          * \<button onClick='clear/remove'>
          * **\<SongCard />**
            * \<img src='album photo'>
            * 'song title, artist, tempo, length'
            * \<button onClick='add/remove/edit'>
    * \<footer>
      * \<a href='api credit'>
      * \<a href='github'>

## Functional Components
 

| Component | Description | 
| --- | --- |  
| PlaylistBuilder | User may search for songs and compile playlists with the results | 
| SearchInput | Searches the API database | 
| SearchResults | Displays results of a search | 
| PlaylistEditor | Takes and displays user selections from search | 
| PlaylistCard | Displays curated list of songs and includes editing options | 
| SongCard | Displays song image, title, artist, tempo and length | 
| SavedPlaylists | Displays previously saved playlists, saved to local storage | 

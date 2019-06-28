import React from 'react'
import SongSummary from './SongSummary'
import SongInfo from './SongInfo'

export default class SongCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearchResult: this.props.isSearchResult,
      fullInfo: !this.props.isSearchResult,
      add: this.props.isSearchResult
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      fullInfo: !prevState.fullInfo
    }))
  }

  render() {
    return (
      <div onClick={this.state.isSearchResult && this.handleClick}>
        {this.state.fullInfo ? <p>song info</p> : <p>summary</p>}
        
      {/* <p>{props.song.title}</p>
      <p>by {props.song.name}</p>
      <p>{props.song.tempo}</p> */}
      </div>
    );
  }
}
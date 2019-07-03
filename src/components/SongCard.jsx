import React from 'react'
import SongSummary from './SongSummary'
import AdditionalInfo from './AdditionalInfo'
import { getSongById } from '../services/api-helper'

export default class SongCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearchResult: this.props.isSearchResult,
      showFullInfo: !this.props.isSearchResult,
      fullInfoCalled: false,
      fullInfo: null
    }
  }

  handleClick = async () => {
    if (!this.state.fullInfo) {
      let fullInfo = await getSongById(this.props.song.id)
      this.setState({
        fullInfo: fullInfo
      })
    }
    this.setState(prevState => ({
      showFullInfo: !prevState.showFullInfo
    }))
  }

  render() {
    return (
      <>
        <div className="song-info" onClick={this.state.isSearchResult && this.handleClick}>
          <SongSummary song={this.props.song} showFullInfo={this.state.showFullInfo} />
          {this.state.showFullInfo && <AdditionalInfo song={this.state.fullInfo} handleAddSong={this.props.handleAddSong} isSearchResult={this.props.isSearchResult} />}
        </div>
      </>
    );
  }
}
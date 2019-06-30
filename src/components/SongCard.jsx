import React from 'react'
import SongSummary from './SongSummary'
import AdditionalInfo from './AdditionalInfo'
import AddRemoveButton from './AddRemoveButton'
import { getSongById } from '../services/api-helper'
import art_default from '../assets/art_default.jpg'

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
      console.log(this.state.fullInfo)
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
          {this.state.showFullInfo && <AdditionalInfo song={this.state.fullInfo} />}
           
        </div>
        <AddRemoveButton
          handleAddSong={this.props.handleAddSong}
          add={this.props.isSearchResult}
          song={this.props.song}
        />
      </>
    );
  }
}
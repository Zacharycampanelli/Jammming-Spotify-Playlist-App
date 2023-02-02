import React from 'react';

import { TrackList } from '../TrackList.js/TrackList';
import './Playlist.css';

export class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        <TrackList tracks={this.props.tracks} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

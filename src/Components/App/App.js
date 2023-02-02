import React, { Component } from 'react';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { name: 'nameOne', artist: 'artistOne', album: 'albumOne', id: 1 },
        { name: 'nameTwo', artist: 'artistTwo', album: 'albumTwo', id: 2 },
        { name: 'nameThree', artist: 'artistThree', album: 'albumThree', id: 3 }
      ],
      playlistName: "Playlistname",
      playlistTracks: [
        { name: 'playlistNameOne', artist: 'playlistArtistOne', album: 'playlistAlbumOne', id: 1 },
        { name: 'playlistNameTwo', artist: 'playlistArtistTwo', album: 'playlistAlbumTwo', id: 2 },
        { name: 'playlistNameThree', artist: 'playlistArtistThree', album: 'playlistAlbumThree', id: 3 }
    ]
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { name: 'nameOne', artist: 'artistOne', album: 'albumOne', id: 1 },
        { name: 'nameTwo', artist: 'artistTwo', album: 'albumTwo', id: 2 },
        { name: 'nameThree', artist: 'artistThree', album: 'albumThree', id: 3 },
      ],
      playlistName: 'Playlistname',
      playlistTracks: [
        { name: 'playlistNameOne', artist: 'playlistArtistOne', album: 'playlistAlbumOne', id: 4 },
        { name: 'playlistNameTwo', artist: 'playlistArtistTwo', album: 'playlistAlbumTwo', id: 5 },
        { name: 'playlistNameThree', artist: 'playlistArtistThree', album: 'playlistAlbumThree', id: 6 },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    const newTracks = this.state.playlistTracks;

    newTracks.push(track);
    this.setState({ playlistTracks: newTracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
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
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName} 
            onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

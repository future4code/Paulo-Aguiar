import React from 'react'
import AddPlaylist from '../AddPlaylist/AddPlaylist'
import axios from 'axios'
import {
  Main,
  LibraryDiv,
  PlaylistsDiv,
  Nav,
  PlaylistTracksDiv,
} from './style'

export default class ShowPlaylists extends React.Component {
  state = {
    playlistsDiv: false,
    allPlaylists: [],
    playlistTracks: [],
    playlistTracksDiv: false
  }

  componentDidMount = () => {
    this.getAllPlaylists()
  }

  getPlaylistTracks = (playlistId) => {
    const headers = {
      Authorization: 'paulo-machado-mello'
    }
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/'+ playlistId + '/tracks', {headers})
      .then((response) => {
        this.setState({playlistTracks: response.data.result.tracks})
        this.setState({playlistTracksDiv: true})
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  getAllPlaylists = () => {
    const headers = {
      Authorization: 'paulo-machado-mello'
    }
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {headers})
      .then((response) => {
        this.setState({allPlaylists: response.data.result.list})
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  deletePlaylist = (playlistId) => {
    const headers = {
      Authorization: 'paulo-machado-mello'
    }
    axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/' + playlistId, {headers})
      .then((response) => {
        window.alert('Playlist excluída com sucesso')
        this.getAllPlaylists()
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  onClickLibrary = () => {
    this.setState({playlistsDiv: !this.state.playlistsDiv})
  }

  render() {
    const allPlaylists = this.props.allPlaylists
    console.log(allPlaylists)
    return (
      <Main>
        <Nav>
          <AddPlaylist />
          <LibraryDiv onClick={this.onClickLibrary}>
            <img alt='biblioteca' src={'https://image.flaticon.com/icons/svg/899/899800.svg'} />
            <span>Sua Biblioteca</span>
          </LibraryDiv>
        </Nav>
        {this.state.playlistsDiv &&
        <PlaylistsDiv>
          <h3>Playlists</h3>
          <ul>
            {this.state.allPlaylists.map((playlist) => {
              return (
                <div>
                  <li onClick={() => this.getPlaylistTracks(playlist.id)}>{playlist.name}</li>
                  <img 
                    alt='delete' 
                    src={'https://image.flaticon.com/icons/svg/1828/1828843.svg'} 
                    onClick={() => this.deletePlaylist(playlist.id)}
                  />
                </div>
              )
            })}
          </ul>
        </PlaylistsDiv>}
        {this.state.playlistTracksDiv &&
        <PlaylistTracksDiv>
          <h3>Músicas({this.state.playlistTracks.length})</h3>
            <section>
              <div className='nameDiv'>
                <span>Nome</span>
              </div>
              <div className='artistDiv'>
                <span>Artista</span>
              </div>
            </section>
          {this.state.playlistTracks.map((track) => {
            return (
              <section>
                <div className='nameDiv'>
                  <span>{track.name}</span>
                </div>
                <div className='artistDiv'>
                  <span>{track.artist}</span>
                </div>
              </section>
            )
          })}
        </PlaylistTracksDiv>}
      </Main>
    )
  }
}
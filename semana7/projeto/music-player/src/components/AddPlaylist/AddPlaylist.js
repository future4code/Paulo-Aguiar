import React from 'react'
import axios from 'axios'
import {
  Main,
  AddPlaylistDiv,
  Form
} from './style'
import ShowPlaylists from '../ShowPlaylists/ShowPlaylists'

export default class AddPlaylist extends React.Component {
  state = {
    playlistName: '',
    addPlaylistForm: false,
    allPlaylists: []
  }

  componentDidMount = () => {
    this.getAllPlaylists()
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
  
  createPlaylist = () => {
    const headers = {
      Authorization: 'paulo-machado-mello'
    } 
    const body = {
      name: this.state.playlistName
    }

    const playlistCopy = this.state.allPlaylists.map((playlist) => {
      return playlist.name
    })

    playlistCopy.includes(this.state.playlistName) ?
    window.alert('Essa playlist já existe, meeeh') :
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {headers})
    .then((response) => {
      this.setState({playlistName: ''})
      window.alert('Playlist ' + this.state.playlistName + ' adicionada com sucesso')
    })
    .catch((error) => {
      window.alert(error)
    })
  }
  
  onClickAddPlaylistForm = () => {
    this.setState({addPlaylistForm: !this.state.addPlaylistForm})
  }

  onChangePlaylistInput = (event) => {
    this.setState({playlistName: event.target.value})
  }

  render() {
    return (
      <Main>
        <AddPlaylistDiv onClick={this.onClickAddPlaylistForm}>
          <img alt='adicionar playlist' src={'https://image.flaticon.com/icons/svg/992/992651.svg'} />
          <span>Criar Playlist</span>
        </AddPlaylistDiv>
        {this.state.addPlaylistForm &&
        <Form>
          <input 
            type='text'
            placeholder='nova playlist'
            onChange={this.onChangePlaylistInput}
            value={this.state.playlistName}  
          />
          <div>
            <span onClick={this.onClickAddPlaylistForm}>cancelar</span>
            <button onClick={this.createPlaylist}>Criar</button>
          </div>
        </Form>}
      </Main>
    )
  }
}
import React from 'react';
import Axios from 'axios';
import App from '../App';

class UserDetails extends React.Component {
  state = {
    userName: '',
    userMail: ''
  }

  getUserById = (userId) => {
    const headers = {
      Authorization: 'paulo-machado-mello'
    }
    Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + userId, {headers})
      .then((response) => {
        this.setState({userName: response.data.name, userMail: response.data.email})
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  render() {
    return (
      <ul>
        <li>Nome: {this.state.userName} - E-mail: {this.state.userMail}</li>
      </ul>
    )
  }
}

export default UserDetails;
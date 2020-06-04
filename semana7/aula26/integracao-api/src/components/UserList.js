import React from 'react';
import Styled from 'styled-components'
import Axios from 'axios';
import UserDetails from './UserDetails';

const DeleteImage = Styled.img`
  width: 12px;
  margin-left: 5px;
  cursor: pointer;
`

class UserList extends React.Component {
  state = {
    usersList: [],
    userName: '',
    userMail: '',
    userId: '',
  }

  componentDidMount = () => {
    this.listAllUsers()
  }

  listAllUsers = () => {
    Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'paulo-machado-mello'
      }
    })
      .then((response) => {
        this.setState({usersList: response.data})
      })
      .catch((error) => {
        window.alert('Não rola de te dar a lista, meeeh')
      })
      console.log(this.state.usersList)
  }

  askDelete = (userId) => {
    const ask = prompt('Tem certeza que deseja deletar o usuário? (Digite sim p/ continuar)')
    ask === 'sim' ? this.deleteUser(userId) : window.alert('Usuário não deletado')
  }

  deleteUser = (userId) => {
    const headers = {
      Authorization: 'paulo-machado-mello'
    }
    Axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + userId, {headers})
      .then((response) => {
        window.alert('Usuário deletado com sucesso')
        this.listAllUsers()
      })
      .catch((error) => {
        window.alert('Ocorreu um erro ao deletar o usuário')
      })
  }

  onClickUser = (userId) => {
    this.setState({userId: userId})
  }

  render () {
    return (
      <ul>
        {this.state.usersList.length === 0 && 'Carregando lista de usuários'}
        {this.state.usersList.map((user) => {
          return (  
            <li onClick={() => this.onClickUser(user.id)} key={user.id}>
              {user.name}
              <DeleteImage 
                onClick={() => this.askDelete(user.id)}
                alt='deletar usuário' 
                src={'https://image.flaticon.com/icons/svg/1828/1828843.svg'}
              />
            </li>
          )
        })}
      </ul>  
    )
  }
}

export default UserList
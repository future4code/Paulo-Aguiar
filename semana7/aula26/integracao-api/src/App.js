import React from 'react';
import Styled from 'styled-components'
import Axios from 'axios';

const Main = Styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 50px;
    height: 30px;
    width: 150px;
  }
`
const Section = Styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 200px;
  border: 1px solid black;
`
const Form = Styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  input {
    height: 20px;
  }
  label {
    margin-top: 10px
  }
  button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    height: 30px;
    width: 100px;
    background-color: greenyellow;
    border: 1px solid black;
  }
`

class App extends React.Component {
  state = {
    usersList: [],
    userName: '',
    userMail: ''
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

  addUser = () => {
    const body = {
      name: this.state.userName,
      email: this.state.userMail
    }

    Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: 'paulo-machado-mello'
      }
    })
      .then((response) => {
        window.alert('Usuário Cadastrado')
        this.setState({userName:''})
        this.setState({userMail:''})
      })
      .catch((error) => {
        window.alert('Não deu certo, meeeh')
      })
  }

  onChangeUserName = (event) => {
    this.setState({userName: event.target.value})
  }
  
  onChangeUserMail = (event) => {
    this.setState({userMail: event.target.value})
  }

  render() {
    return (
      <Main>
        <Section>
          <Form>
            <label>Nome:</label>
            <input value={this.state.userName} onChange={this.onChangeUserName} type='text' />
            <label>E-mail:</label>
            <input value={this.state.userMail} onChange={this.onChangeUserMail} type='text' />
            <button onClick={this.addUser}>Salvar</button>
          </Form>
        </Section>
        <button onClick={this.listAllUsers}>Ir para lista</button>
        <div>
          {this.state.usersList.map((user) => {
            return  <li key={user.id}>{user.name}</li>
          })}
        </div>
      </Main>
    );
  }
}
export default App;

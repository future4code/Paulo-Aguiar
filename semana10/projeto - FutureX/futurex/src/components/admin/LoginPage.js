import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function LoginPage() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [tokenPass, setTokenPass] = useState(false)

  const history = useHistory()

  function goToEditTripsList() {
    history.push('/trips/edit')
  }
  function goToCreateTrip() {
    history.push('/trips/create')
  }

  function onChangeUser(event) {
    setUser(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    token && setTokenPass(true)
  },[])

  function logOutAdmin() {
    window.localStorage.removeItem('token')
    setTokenPass(false)
  }

  function loginAdmin() {
    const aluno = 'paulo-machado-mello'
    const body = {
      email: user,
      password: password
    }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/'+ aluno +'/login', body)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token)
        window.alert(`admin ${user} logado com sucesso`)
        setTokenPass(true)
      })
      .catch((error) => {
        const errorType = error.response.data.message
        window.alert(errorType)
        errorType === 'Senha incorreta' ? 
        setPassword('') :
        setUser('')
        setPassword('')
      })
  }

  return (
    <main>
      <h1>Login</h1>
      <input 
        value={user} 
        placeholder='usuário' 
        onChange={onChangeUser} 
      />
      <input 
        value={password} 
        placeholder='senha' 
        type='password'
        onChange={onChangePassword}
      />
      <button onClick={loginAdmin}>Fazer login</button>
      {tokenPass &&
      <div>
        <button onClick={goToEditTripsList}>Listar viagens</button>
        <button onClick={goToCreateTrip}>Criar viagem</button>
        <button onClick={logOutAdmin}>Logout</button>
      </div>}
    </main>
  )
}

export default LoginPage
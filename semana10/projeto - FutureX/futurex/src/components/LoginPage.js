import React from 'react'
import { useHistory } from 'react-router-dom'

function LoginPage() {
  const history = useHistory()

  function goToTripDetails() {
    history.push('/trips/details')
  }
  function goToCreateTrip() {
    history.push('/trips/create')
  }
  return (
    <main>
      <h1>Login</h1>
      <button onClick={goToTripDetails}>Listar viagens</button>
      <button onClick={goToCreateTrip}>Criar viagem</button>
    </main>
  )
}

export default LoginPage
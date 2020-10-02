import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()
  function goToLoginPage() {
    history.push('/login')
  }
  function goToListTripsPage() {
    history.push('/trips/list')
  }
  
  return (
    <main>
      <h1>Home</h1>
      <button onClick={goToLoginPage}>Fazer Login</button>
      <button onClick={goToListTripsPage}>Ver viagens disponíveis</button>
    </main>
  )
}

export default Home
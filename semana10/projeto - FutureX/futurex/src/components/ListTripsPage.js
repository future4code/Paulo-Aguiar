import React from 'react'
import { useHistory } from 'react-router-dom'

function ListTripsPage() {
  const history = useHistory()

  function goToApplicationForm() {
    history.push('/application-form')
  }
  return (
    <main>
      <h1>Lista de viagens disponíveis para o usuário</h1>
      <button onClick={goToApplicationForm}>Candidatar-se</button>
    </main>
  )
}

export default ListTripsPage
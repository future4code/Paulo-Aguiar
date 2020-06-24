import React from 'react'
import { useHistory } from 'react-router-dom'
import {useProtectedPage} from '../hooks/ProtectedPage'

function ListTripsPage() {
  useProtectedPage()

  return (
    <main>
      <h1>Lista de viagens disponíveis para o admin editar</h1>
    </main>
  )
}

export default ListTripsPage
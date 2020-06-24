import React from 'react'
import {useProtectedPage} from '../hooks/ProtectedPage'

function TripDetailsPage() {
  useProtectedPage()
  
  return (
    <main>
      <h1>Trip Details</h1>
    </main>
  )
}

export default TripDetailsPage
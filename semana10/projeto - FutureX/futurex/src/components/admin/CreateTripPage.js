import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useProtectedPage} from '../hooks/ProtectedPage'

function CreateTripPage() {
  useProtectedPage()

  return (
    <main>
      <h1>Create Trip</h1>
    </main>
  )
}

export default CreateTripPage
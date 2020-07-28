import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export function useProtectedPage() {
  const history = useHistory()
  
  useEffect(() => { 
    const token = window.localStorage.getItem('token')
    if(!token) {
      window.alert('Você precisa estar logado para acessar esta página')
      history.push('/login')
    } 
  }, [history])
}


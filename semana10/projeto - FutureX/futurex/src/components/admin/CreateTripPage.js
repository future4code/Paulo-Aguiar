import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useProtectedPage} from '../hooks/useProtectedPage'
import {useForm} from '../hooks/useForm'

function CreateTripPage() {
  useProtectedPage()
  const {form, onChange, resetForm} = useForm({
    name:'',
    planet:'',
    email:'',
    description:'',
    durationInDays:''
  })

  function submit(event) {
    event.preventDefault()
    console.log(form)
  }

  const onChangeInput = (event) => {
    const {name, value} = event.target
    onChange(name, value)
  }

  const planetsList = ['Mercúrio', 'Vênus', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno', 'Plutão' ]

  return (
    <main>
      <h1>Create Trip</h1>
      <form onSubmit={submit}>
        <label>Nome</label>
        <input 
          value={form.name}
          onChange={onChangeInput}
          name='name'
          type='text'
          inputprops={{
            pattern: '[A-Za-z]{5,}',
            title: 'O nome precisa ter ao menos 5 letras'
          }}
          required
        />

        <label>Planeta</label>
        <select
          value={form.planet}
          onChange={onChangeInput}
          name='planet'
          type='text'
          inputProps={{
            title: 'Escolha um planeta da lista'
          }}
          required
        >
        <option hidden>Escolha um planeta</option>
        {planetsList.map((planet) => {
          return (
            <option>{planet}</option>
          )
        })}
        </select> 

        <label>E-mail:</label>
        <input 
          value={form.date}
          onChange={onChangeInput}
          name='email'
          type='email'
          required
        />

        <label>Descrição da viagem:</label>
        <input 
          value={form.description}
          onChange={onChangeInput}
          name='description'
          type='text'
          inputProps={{
            pattern: '{30,}',
            title: 'A descrição deve ter o mínimo de 30 letras'
          }}
          required
        />

        <label>Duração</label>
        <input 
          value={form.durationInDays}
          onChange={onChangeInput}
          name='durationInDays'
          type='number'
          inputProps={{
            pattern: '{50,}',
            title: 'Escolha uma data futura'
          }}
          required
        />
        <button type='submit'>Criar nova viagem</button>
      </form>
    </main>
  )
}

export default CreateTripPage
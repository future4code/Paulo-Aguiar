import React, { useState, useEffect } from 'react'
import {StylesProvider} from '@material-ui/core/styles'
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import {
  Main,
  InputNovaTarefa,
  Menu,
  BotaoNovaTarefa
} from './style'
import axios from 'axios';

function Header() {
  const [diaDaSemana, setDiaDaSemana] = useState('')
  const [novaTarefa, setNovaTarefa] = useState('')

  function onChangeMenu(event) {
    setDiaDaSemana(event.target.value)
  }

  function onChangeInput(event) {
    setNovaTarefa(event.target.value)
  }

  function onClickCriarTarefa() {
    const body = {
      text: novaTarefa,
      day: diaDaSemana,
      completa: false
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-paulo', body)
      .then((response) => {
        setNovaTarefa('')
        window.alert("tarefa criada com sucesso")
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
  return(
    <StylesProvider injectFirst>
    <Main>
    <section>
      <InputNovaTarefa 
        onChange={onChangeInput}
        value={novaTarefa}
        label='nova tarefa' 
        variant='outlined' 
        size='small' 
        color='secondary.main'
      />
      <FormControl>
        <InputLabel>Dia da semana</InputLabel>
        <Menu value={diaDaSemana} onChange={onChangeMenu}>
          {diasDaSemana.map((dia) => {
            return (
            <MenuItem key={dia} value={dia}>{dia}</MenuItem>
            )
          })}
        </Menu>
      </FormControl>
      <BotaoNovaTarefa onClick={onClickCriarTarefa}>Criar tarefa</BotaoNovaTarefa>
    </section>
    </Main>
    </StylesProvider>
  )
}

export default Header
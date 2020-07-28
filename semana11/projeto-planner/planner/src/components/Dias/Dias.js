import React, { useState, useEffect } from 'react'
import {StylesProvider} from '@material-ui/core/styles'
import axios from 'axios'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import styled from 'styled-components'
import {
  Main,
  Tarefa,
  ListaTarefas
} from './style'

function Dias () {
  const [tarefas, setTarefas] = useState([])
  const [tarefaCompleta, setTarefaCompleta] = useState(true)

  function getTarefas() {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-paulo')
      .then((response) => {
        setTarefas(response.data)
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  function editarTarefa(id) {
      setTarefaCompleta(!tarefaCompleta)
      const body = {
        completa: tarefaCompleta
      }
    axios.put('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-paulo/' + id, body)
      .then((response) => {
        console.log(tarefaCompleta)
      })
  }

  function deleteTarefa(id) {
    axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-paulo/' + id)
      .then((response) => {
        window.alert('tarefa excluída')
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  useEffect(() => {
    getTarefas()
  }, [tarefas])

  function tarefaPronta(id) {
    tarefas.map((tarefa) => {
      if(tarefa.id === id) {
        editarTarefa(id)
      }
    })
    console.log(tarefas)
  }


  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
  
  return (
    <StylesProvider injectFirst>
      <Main>
        {diasDaSemana.map((dia) => {
          const diaCopia = dia
          return (
            <section key={dia}>
            <h3>{dia}</h3>
            {tarefas.map((tarefa) => {
              return(
                tarefa.day === diaCopia &&
                <ListItem  onClick={() => tarefaPronta(tarefa.id)} button>
                  <ListaTarefas completa={tarefa.completa} primary={tarefa.text} />
                </ListItem>)
            })}
          </section>
          )
        })}
      </Main>
    </StylesProvider>
  )
}

export default Dias
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import { ExpansionPanelActions } from '@material-ui/core';

describe('os componentes estão sendo renderizados?', () => {
  test('o botão de criar tarefa existe na tela?', () => {
    const {getByText} = render(<App/>) 

    const botaoNovaTarefa = getByText(/criar tarefa/i)

    expect(botaoNovaTarefa).toBeInTheDocument()

  })
})

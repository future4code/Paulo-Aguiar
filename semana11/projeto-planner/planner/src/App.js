import React from 'react';
import Dias from './components/Dias/Dias';
import Header from './components/Header/Header'
import {
  Main
} from './style'

function App() {
  const tarefas = ['tarefa 1', 'tarefa 2', 'tarefa 3']
  return (
   <Main>
    <Header/>
    <section>
      <Dias />
    </section>
   </Main>
  );
}

export default App;

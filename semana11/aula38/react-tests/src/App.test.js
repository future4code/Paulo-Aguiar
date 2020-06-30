import React from "react";
import { render, fireEvent, getByPlaceholderText, getByRole, getByTestId, wait } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

test('Ao clicar em adicionar, um novo item é adicionado à lista de post, sendo o conteúdo de acordo com o que o usuário digitou no input de texto', () => {  
  const {getByText, getByPlaceholderText, container} = render(<App />)

  const input = getByPlaceholderText(/novo post/i)

  const botãoAdicionar = getByText(/adiciona/i)
  
  fireEvent.change(input, {target: {value: 'Hello there'}})
  fireEvent.click(botãoAdicionar)
  let listaDePosts = container.querySelector('p')
  
  expect(listaDePosts).toHaveTextContent(/hello/i)
})

test('Ao clicar em Curtir em um post, o botão que foi clicado deve trocar o texto para Descurtir', () => {
  const {getByText, getByPlaceholderText, getByTestId} = render(<App />)

  const input = getByPlaceholderText(/novo post/i)
  const botãoAdicionar = getByText(/adiciona/i)
  
  fireEvent.change(input, {target: {value: 'Hello there'}})
  fireEvent.click(botãoAdicionar)

  let botaoCurtida = getByTestId('like-button')

  fireEvent.click(botaoCurtida)

  expect(botaoCurtida).toHaveTextContent(/descurtir/i)

})

test('Quando o usuário clicar em apagar, o post deve sumir da tela',  () => {
  const {getByText, queryByText, getByPlaceholderText} = render(<App/>)

  const input = getByPlaceholderText(/novo post/i)
  const botãoAdicionar = getByText(/adiciona/i)

  fireEvent.change(input, {target: {value: 'doomed post'}})
  fireEvent.click(botãoAdicionar)

  const botaoApagar = getByText(/Apagar/)
  
  fireEvent.click(botaoApagar)
  
  expect(getByText(/doomed/)).toBeFalsy()
  
})

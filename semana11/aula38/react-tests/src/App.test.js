import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

test('Ao clicar em adicionar, um novo item é adicionado à lista de post', () => {  
  const {getByText} = render(<App />)

  const botãoAdicionar = getByText(/adiciona/i)

  fireEvent.click(botãoAdicionar)

  let listaDePosts = 
})

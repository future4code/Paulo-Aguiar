import styled from 'styled-components'
import { TextField, Select, Button } from '@material-ui/core';

export const Main = styled.main`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 7px 3px rgba(0,0,0,0.26);
  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 600px;
  }
`
export const InputNovaTarefa = styled(TextField)`
  
`
export const Menu = styled(Select)`
  margin-bottom: 15px;
  width: 150px;
`
export const BotaoNovaTarefa = styled(Button)`
    color: #ffffff;
    background: #FE6B8B;
    border-radius: 3;
    border: 0;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    transition: 0.5;
    :hover {
      background: #FF8E53;
    }
`
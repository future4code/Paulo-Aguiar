import styled from 'styled-components'
import ListItemText from '@material-ui/core/ListItemText'


export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  h3 {
    color: red;
    margin-left: 16px;
  }
  section {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 200px;
    border: 1px dotted black;
  }
`

export const Tarefa = styled.p`
  color: ${({completa}) => (completa ? 'green' : 'none')};
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

export const ListaTarefas = styled(ListItemText)`
  .MuiListItemText-primary {
    text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  }
`

import styled from 'styled-components'
import { Breadcrumbs, Button } from '@material-ui/core'

export const Main = styled.main`
  /* display: flex;
  justify-content: center;
  width: 400px; */
`
export const NavBar = styled(Breadcrumbs)`
  display: flex;
  justify-content: center;
  .link {
    cursor: pointer;
    align-self: center;
    font-size: 20px;
  }
  .icon {
    margin-right: 4px;
    align-self: center;
  }
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  text-align: center;
  img {
    width: 90px;
  }
  span {
    color: red;
    font-size: 40px;
  }
`
export const ButtonClear = styled(Button)`
 
`
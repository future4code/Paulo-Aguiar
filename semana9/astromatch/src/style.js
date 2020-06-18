import styled from 'styled-components'
import { Breadcrumbs } from '@material-ui/core'

export const Main = styled.main`
  /* display: flex;
  justify-content: center;
  width: 400px; */
`
export const NavBar = styled(Breadcrumbs)`
  display: flex;
  justify-content: center;
  .link {
    align-self: center;
    font-size: 20px;
  }
  .icon {
    width: 20px;
    margin-top: 8px;
    margin-right: 4px;
    align-self: center;
  }
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: center;
  img {
    width: 90px;
  }
  span {
    color: red;
    font-size: 40px;
  }
`
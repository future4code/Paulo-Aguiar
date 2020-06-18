import React, {useState, useEffect} from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChooseScreen from './components/ChooseScreen/ChooseScreen'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import logo from './images/astromatch.png'
import {
  Main,
  Logo,
  NavBar
} from './style'

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#cf0404",
    },
    secondary: {
      main: "#04cf08"
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={myTheme}>
      <Main>
        <Logo>
          <img alt='logo' src={logo}/>
          <span>astromatch</span>
        </Logo>
        <NavBar>
          <Link color='primary' className={'link'}>
            <HomeIcon className={'icon'} />
            Matches
          </Link>
          <Link color='primary' className={'link'}>
            <WhatshotIcon className={'icon'} />
            Matches
          </Link>
        </NavBar>
        <ChooseScreen />
      </Main>
    </MuiThemeProvider>
  );
}

export default App;

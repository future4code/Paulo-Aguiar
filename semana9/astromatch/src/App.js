import React, {useState, useEffect} from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChooseScreen from './components/ChooseScreen/ChooseScreen'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import MatchScreen from './components/MatchScreen/MatchScreen'
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
  const [matchesDiv, setMatchesDiv] = useState(true);

  function onClickMatches() {
    setMatchesDiv(!matchesDiv)
  }

  return (
    <MuiThemeProvider theme={myTheme}>
      <Main>
        <Logo>
          <span>astromatch</span>
        </Logo>
        <NavBar>
          {matchesDiv ?
          <Link onClick={onClickMatches} color='primary' className={'link'}>
            <WhatshotIcon fontSize={'small'} className={'icon'} />
            Matches
          </Link> :
          <Link onClick={onClickMatches} color='primary' className={'link'}>
            <HomeIcon fontSize={'small'} className={'icon'} />
            Cardápio
          </Link>}
        </NavBar>
        {matchesDiv ?
        <ChooseScreen /> :
        <MatchScreen />}
      </Main>
    </MuiThemeProvider>
  );
}

export default App;

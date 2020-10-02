import React, {useState, useEffect} from 'react'
import ChooseScreen from './components/ChooseScreen/ChooseScreen'
import MatchScreen from './components/MatchScreen/MatchScreen'
import axios from 'axios'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import {
  createMuiTheme, 
  MuiThemeProvider, 
  Link
} from '@material-ui/core'
import {
  Main,
  Logo,
  NavBar,
  ButtonClear
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

  function onClickClear() {
    const aluno = 'paulo-machado-mello'
    const headers = {
      ContentType: 'application/jason'
    }
    const body = {
      id: "PatusZf4mHH6UoZfYC8I"
    }
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/' + aluno + '/clear', body, {headers})
      .then((response) => {
        window.alert('todos os seus matches foram desfeitos :(')
      })
      .catch((error) => {
        window.alert(error)
      })
  }

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
        <ButtonClear color={'primary'} onClick={onClickClear}>limpar matches</ButtonClear>
      </Main>
    </MuiThemeProvider>
  );
}

export default App;

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {
  Main,
  Profiles,
  Choice
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



export default function MatchScreen() {
  
  const [matches, setMacthes] = useState([])
  
  function getMatches() {
    const aluno = 'paulo-machado-mello'
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/'+ aluno +'/matches')
    .then((response) => {
      setMacthes(response.data.matches)
    })
    .catch((error) => {
      window.alert(error)
    })
  }
  
  useEffect(() => {
    getMatches()
  }, [])

  return(
    <Main>
      <Profiles>
        {matches.map((match) => {
          return (
            <div>
              <img alt='person thumb' src={match.photo} />
              <p>{match.name}</p>
            </div>
          )
        })}
      </Profiles>
    </Main>
  )
}
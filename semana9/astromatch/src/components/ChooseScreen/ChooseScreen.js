import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {
  Main,
  ProfileDetails,
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

export default function ChooseScreen() {
  const [profile, setProfile] = useState('')

  useEffect(() => {
    getProfileToChoose()
  }, [])

  function getProfileToChoose() {
    const aluno = 'paulo-machado-mello'
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/'+ aluno +'/person')
      .then((response) => {
        setProfile(response.data.profile)
      })
  }

  return(
    <MuiThemeProvider theme={myTheme}>
      <Main>
        <ProfileDetails>
          <img alt='person' src={profile.photo}/>
          <div>
          <p>{profile.name}</p> 
          <p>{profile.age}</p>
          </div>
          <p>{profile.bio}</p>
          <Choice>
            <p>
              <Fab>
                <NotInterestedIcon fontSize='large' color='primary' />
              </Fab>
            </p>
            <p>
              <Fab>
                <FavoriteIcon fontSize='large' color='secondary'/>
              </Fab>
            </p>
          </Choice>
        </ProfileDetails>
      </Main>
    </MuiThemeProvider>
  )
}
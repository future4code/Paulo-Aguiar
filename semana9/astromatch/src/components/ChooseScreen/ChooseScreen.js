import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import logo from '../../images/astromatch.png'
import {
  Main,
  ProfileDetails,
  Choice,
  Logo
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
  const [profileId, setProfileId] = useState('')
  const [profileChoice, setChoice] = useState(false)
  
  useEffect(() => {
    getProfileToChoose()
  }, [])

  function userChoiceTrue(id) {
    setChoice(true)
    setProfileId(id)
    choosePerson()
  }
  
  function userChoiceFalse(id) {
    setChoice(false)
    setProfileId(id)
    choosePerson()
  }

  function choosePerson() {
    const aluno = 'paulo-machado-mello'
    const headers = {
      ContentType: 'application/json'
    }
    const body = {
      id: profileId,
      choice: profileChoice
    }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/' + aluno + '/choose-person', body, {headers})
      .then((response) => {
        getProfileToChoose()
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  function getProfileToChoose() {
    const aluno = 'paulo-machado-mello'
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/'+ aluno +'/person')
      .then((response) => {
        setProfile(response.data.profile)
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  return(
    <MuiThemeProvider theme={myTheme}>
      <Main>
        {profile ?
        <ProfileDetails>
          <img alt='person' src={profile.photo}/>
          <div>
            <p>{profile.name}</p> 
            <p>{profile.age}</p>
          </div>
          <p>{profile.bio}</p>
        </ProfileDetails> :
        <Logo alt='logo' src={logo} />}
        <Choice>
          <p>
            <Fab onClick={() => userChoiceFalse(profile.id)}>
              <NotInterestedIcon fontSize='large' color='primary' />
            </Fab>
          </p>
          <p>
            <Fab onClick={() => userChoiceTrue(profile.id)}>
              <FavoriteIcon fontSize='large' color='secondary'/>
            </Fab>
          </p>
        </Choice>
      </Main>
    </MuiThemeProvider>
  )
}
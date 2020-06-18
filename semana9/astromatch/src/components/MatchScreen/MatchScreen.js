import React, {useState, useEffect} from 'react'
import axios from 'axios'
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
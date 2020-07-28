import React from 'react'
import {Switch, Route, BrowserRouter, useHistory} from 'react-router-dom'
import Home from './components/Home/Home'
import LoginPage from './components/admin/LoginPage'
import CreateTripPage from './components/admin/CreateTripPage'
import ListTripsPage from './components/ListTripsPage'
import TripDetailsPage from './components/admin/TripDetailsPage'
import ApplicationFormPage from './components/ApplicationFormPage'
import EditListTripPage from './components/admin/EditListTripsPage'

function Router() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/application-form'>
          <ApplicationFormPage />
        </Route>
        <Route exact path='/trips/edit'>
          <EditListTripPage />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/trips/create'>
          <CreateTripPage />
        </Route>
        <Route exact path='/trips/list'>
          <ListTripsPage />
        </Route>
        <Route exact path='/trips/details'>
          <TripDetailsPage />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/'>
          <h1>Página não existente</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
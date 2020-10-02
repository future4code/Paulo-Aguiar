import React from 'react';
import labefyLogo from './images/labefy-logo.png';
import {
  Header,
  Nav
} from './style'
import ShowPlaylists from './components/ShowPlaylists/ShowPlaylists';
import AddPlaylist from './components/AddPlaylist/AddPlaylist';


function App() {
  return (
    <main>
      <Header>
        <div>
          <img alt='logo' src={labefyLogo}/>
          <h2>LABEFY</h2>
        </div>
      </Header>
      <Nav>
        <ShowPlaylists />
      </Nav>
    </main>
  );
}

export default App;

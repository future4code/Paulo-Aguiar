import React, {useState} from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {

  return (
    <AppContainer>
      <Post
        nomeUsuario={'Louise'}
        fotoUsuario={'https://scontent.fbsb8-2.fna.fbcdn.net/v/t31.0-8/p720x720/16992091_639901482801424_7043168843874453531_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_oc=AQk2VmSoftTzCJhse1-iuxjdzITtL9-OkOGy4JRdtmhDYQtKaB2MEaMTcnOWpiRG93I&_nc_ht=scontent.fbsb8-2.fna&_nc_tp=6&oh=50cd5b0aee546fb16dff69da6fc106e9&oe=5F0C9803'}
        fotoPost={'https://scontent.fbsb8-1.fna.fbcdn.net/v/t31.0-8/17349645_648468768611362_378021853406049689_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_oc=AQlTTb_LcCJtKv2c4cpNcEBGuSmHWTqdlF1SNlbbRvQ_RhS1V97JyF4xswe3cGPewJ4&_nc_ht=scontent.fbsb8-1.fna&oh=a4f3c438cd7a1b875914c5427fb235fe&oe=5F0C42CE'}
      />
      <Post
        nomeUsuario={'Paulita'}
        fotoUsuario={'https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/p720x720/75561518_2654443751283280_5757016602130251776_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQmKc7fkST4P1rOpJ5WQIV7R21iZntzAHJIkZCq8p18f3QYrnvT2nkaeTHq5VEu93WY&_nc_ht=scontent.fbsb8-1.fna&_nc_tp=6&oh=34d5008f3db5b70884942bdab9522436&oe=5F0E2660'}
        fotoPost={'https://scontent.fbsb8-2.fna.fbcdn.net/v/t31.0-8/11958213_1067370020003764_892616411341616044_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_oc=AQkST3YzIVAbkD40i3H-0GUTJ_kO0nLAMmivnjw9lN5VhcCRSzId_zb_jQZmmWcvf-s&_nc_ht=scontent.fbsb8-2.fna&oh=16a2225533b794101be517a9ae4b2be6&oe=5F0C459C'}
      />
    </AppContainer>
  );
}


export default App;

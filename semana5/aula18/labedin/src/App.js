import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/p960x960/55935458_2337361419616249_4855668176911859712_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeHlU66hruwU-Tkr2Otc7AFI-6MpKLrfpfL7oykout-l8v-Ad-THPa4EG2RspNg1Unue7AxnvpXMnDJA3Uwnlm7-&_nc_oc=AQl0AfO_Oc7xswUr_a8SK9CXyWC0bQqt3KmREHA8twJixvRrd6E5G2caMav-21asG3o&_nc_ht=scontent.fbsb8-1.fna&_nc_tp=6&oh=f0e819895ec00e4557482687b4935650&oe=5EE04FCC" 
          nome="Paulo Machado Aguiar" 
          descricao="Sou geofísico e há um ano venho focando em transicionar de carreira com o objetivo de me tornar um programador, e no momento me dedico em tempo integral ao curso intensivo de formação de desenvolvedores web full-stack da Labenu. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        </div>
        <CardPequeno
          icone="https://image.flaticon.com/icons/png/512/1782/1782751.png"
          nomeInformacao="E-mail:"
          informacao="paulopma@stars.com"
        />
        
        <CardPequeno
          icone="https://image.flaticon.com/icons/svg/1782/1782788.svg"
          nomeInformacao="Endereço:"
          informacao="QS 06, conjunto 610B, casa 20"
        />
        
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Agil Copiadoras" 
          descricao="Passando raiva com os clientes como designer gráfico" 
        />
        
        <CardGrande 
          imagem="https://vignette.wikia.nocookie.net/residentevil/images/5/54/S.T.A.R.S._logo.png/revision/latest/scale-to-width-down/340?cb=20150219093049" 
          nome="S.T.A.R.S." 
          descricao="Evitando o apocalipse zumbi" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

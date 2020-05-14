import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = { 
    posts: [
      {
        nomeUsuario: 'Louise',
        fotoUsuario: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t31.0-8/p720x720/16992091_639901482801424_7043168843874453531_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeHEBjTIJuQlEgN271XsN7GRtirr-o8NTk-2Kuv6jw1OT4AUZolnXv4BdWmF2L5Ju0Vc5US1czkV3zIgfXuQ5MMz&_nc_oc=AQmUNBSaht-Aa7a2BMxuU8T1uWUFIajxi_8o_2qnIy2RyzfhqubYKFlTLz7EsFbV51M&_nc_ht=scontent.fbsb8-2.fna&_nc_tp=6&oh=0a73c57ab028de804bdae0d5faf29e83&oe=5EE11683',
        fotoPost: 'https://scontent.fbsb8-1.fna.fbcdn.net/v/t31.0-8/p720x720/17349645_648468768611362_378021853406049689_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_eui2=AeFjf0-w5DEjAaH6ImXiiDW8ztIVhaIzgxvO0hWFojODG7cVpkuTz4WwSCc0Ifa2ZigntSCGoe_EsPYjDwZRv7cf&_nc_oc=AQlqhiT20SabnwKlals4jk0W3r3rUTw15UeFE-JCqsCaWgWtv5sKDW2lbWJcr8h0Ggc&_nc_ht=scontent.fbsb8-1.fna&_nc_tp=6&oh=22161f7dc42673e5caeff2982c5c9831&oe=5EE30F79',
      },
      {
        nomeUsuario: 'Paulita',
        fotoUsuario: 'https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/p720x720/75561518_2654443751283280_5757016602130251776_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeEygqucAycJVEpvPhhamRoWA0swSxPV-F4DSzBLE9X4XmewUbO8IIL6QpMr-vXCanbPO_Y7rJSRF8lSuXNSn_sp&_nc_oc=AQmm_SRAHUlCnObQaSoQ6_WaVEi8JvkfnYbnrS_hZK467aWWupb8YF9bbX2SvZPRHKM&_nc_ht=scontent.fbsb8-1.fna&_nc_tp=6&oh=751c1da5b5226d3bc7872ac828a07a75&oe=5EE2A4E0',
        fotoPost: 'https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/s960x960/45221852_2020156731378655_3691170236498706432_o.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_eui2=AeGtJq1DLgPtHQiIxMdlkIVHKkhmWiJxrtgqSGZaInGu2ExllayOvPxBmx1_uUimxbUFbnPrs7S1iFoVb2J5a6PK&_nc_oc=AQkp6OJG7Emr6O3SC0BPVi9cCWe0zN9Yy58xDNnstrnnkW8RefBAQ5Kw4grH0Ym6V-g&_nc_ht=scontent.fbsb8-1.fna&_nc_tp=7&oh=580c9fc3953ea8ca5625fbae624a988d&oe=5EE46EF8'
      },
      {
        nomeUsuario: 'Fascbolado',
        fotoUsuario: 'https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/27332026_1872105359467695_2303237931058134088_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeGK5LIUXFEL7P4B6y-vC1uxfUoXQqlxPvJ9ShdCqXE-8lnAZLIwFoqxaLpyjQ_-IOZonbd1CQIP2I1QRblUdCyO&_nc_oc=AQlft9mDOtXzNsjZJn_NYZL6XRMvhp5WaQKkry_fKC6wFSzSk4g086L69YU0VAEJSM4&_nc_ht=scontent.fbsb8-1.fna&oh=8901cc11dd9c5a597938609f62bd812f&oe=5EE14C14',
        fotoPost: 'https://scontent.fbsb8-1.fna.fbcdn.net/v/t31.0-0/p180x540/30814058_1957521127592784_7753090402258200032_o.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_eui2=AeHpOXGwvvqWO7Ktf-SfCZMp12k7rBE0RTLXaTusETRFMqGl8ukBNjJ4bPbuard5oWmwoOmiZR7s3YLnq_A_egz-&_nc_oc=AQmBBuyJBxHsS4Sq9Iiph4onmBkkT3UpHku_WFuvSTlp5Ta1Y5LV746GVhfgZW1J0fU&_nc_ht=scontent.fbsb8-1.fna&_nc_tp=6&oh=ce391e21b25b688b6c635318dc3ed243&oe=5EE2B6BE'
      }
    ],
    inputNomeUsuario: '',
    inputFotoUsuario: '',
    inputFotoPost: ''
  }

  // adicionaPost = () => {
  //   const novoPost = this.state.posts
  //   const postsAtualizado = [...posts]
  // } 


  render() {
    return (
      <div className={'app-container'}>
        {this.state.posts.map((post) => {return <Post {...post}/>} )}
        <h2>Novo Post</h2>
        <div className={'formulario-novo-post'}>
          <label>Nome do usuario: </label>
          <input value={''} />
          <label>Link da Foto do usuário: </label>
          <input value={''} />
          <label>Link da foto do posto: </label>
          <input value={''} />
        </div>
      </div>

    );
  }
}

export default App;

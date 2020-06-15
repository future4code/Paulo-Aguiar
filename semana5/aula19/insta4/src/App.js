import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}> 
        <Post
          nomeUsuario={'Louise'}
          fotoUsuario={'https://scontent.fbsb8-2.fna.fbcdn.net/v/t31.0-8/p720x720/16992091_639901482801424_7043168843874453531_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeHEBjTIJuQlEgN271XsN7GRtirr-o8NTk-2Kuv6jw1OT4AUZolnXv4BdWmF2L5Ju0Vc5US1czkV3zIgfXuQ5MMz&_nc_oc=AQmUNBSaht-Aa7a2BMxuU8T1uWUFIajxi_8o_2qnIy2RyzfhqubYKFlTLz7EsFbV51M&_nc_ht=scontent.fbsb8-2.fna&_nc_tp=6&oh=0a73c57ab028de804bdae0d5faf29e83&oe=5EE11683'}
          fotoPost={'https://scontent.fbsb8-1.fna.fbcdn.net/v/t31.0-8/p720x720/17349645_648468768611362_378021853406049689_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_eui2=AeFjf0-w5DEjAaH6ImXiiDW8ztIVhaIzgxvO0hWFojODG7cVpkuTz4WwSCc0Ifa2ZigntSCGoe_EsPYjDwZRv7cf&_nc_oc=AQlqhiT20SabnwKlals4jk0W3r3rUTw15UeFE-JCqsCaWgWtv5sKDW2lbWJcr8h0Ggc&_nc_ht=scontent.fbsb8-1.fna&_nc_tp=6&oh=22161f7dc42673e5caeff2982c5c9831&oe=5EE30F79'}
        />
        <Post
          nomeUsuario={'Paulita'}
          fotoUsuario={'https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/p720x720/75561518_2654443751283280_5757016602130251776_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQmKc7fkST4P1rOpJ5WQIV7R21iZntzAHJIkZCq8p18f3QYrnvT2nkaeTHq5VEu93WY&_nc_ht=scontent.fbsb8-1.fna&_nc_tp=6&oh=34d5008f3db5b70884942bdab9522436&oe=5F0E2660'}
          fotoPost={'https://scontent.fbsb8-2.fna.fbcdn.net/v/t31.0-8/11958213_1067370020003764_892616411341616044_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_oc=AQkST3YzIVAbkD40i3H-0GUTJ_kO0nLAMmivnjw9lN5VhcCRSzId_zb_jQZmmWcvf-s&_nc_ht=scontent.fbsb8-2.fna&oh=16a2225533b794101be517a9ae4b2be6&oe=5F0C459C'}
        />
        <Post
          nomeUsuario={'Fascbolado'}
          fotoUsuario={'https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/27332026_1872105359467695_2303237931058134088_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeGK5LIUXFEL7P4B6y-vC1uxfUoXQqlxPvJ9ShdCqXE-8lnAZLIwFoqxaLpyjQ_-IOZonbd1CQIP2I1QRblUdCyO&_nc_oc=AQlft9mDOtXzNsjZJn_NYZL6XRMvhp5WaQKkry_fKC6wFSzSk4g086L69YU0VAEJSM4&_nc_ht=scontent.fbsb8-1.fna&oh=8901cc11dd9c5a597938609f62bd812f&oe=5EE14C14'}
          fotoPost={'https://scontent.fbsb8-1.fna.fbcdn.net/v/t31.0-0/p180x540/30814058_1957521127592784_7753090402258200032_o.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_eui2=AeHpOXGwvvqWO7Ktf-SfCZMp12k7rBE0RTLXaTusETRFMqGl8ukBNjJ4bPbuard5oWmwoOmiZR7s3YLnq_A_egz-&_nc_oc=AQmBBuyJBxHsS4Sq9Iiph4onmBkkT3UpHku_WFuvSTlp5Ta1Y5LV746GVhfgZW1J0fU&_nc_ht=scontent.fbsb8-1.fna&_nc_tp=6&oh=ce391e21b25b688b6c635318dc3ed243&oe=5EE2B6BE'}
        />
      </div>
    );
  }
}

export default App;

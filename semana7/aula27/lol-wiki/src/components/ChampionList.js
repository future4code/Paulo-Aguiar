import React from 'react'
import axios from 'axios'

export default class ChampionList extends React.Component {
  state = {
    championsNames: [],
    championId: '',
    championTitle: '',
    championImage: '',
    champDetailsPage: false
  }

  componentDidMount() {
    this.getChampionList()
  }

  getChampionId = (event) => {
    this.setState({champDetailsPage: true})
    const championName = event.target.value
    this.state.championsNames.map((champion) => {
      if(championName === champion.name) {
        this.setState({championId: champion.key})
        this.setState({championTitle: champion.title})
        this.setState({championImage: champion.image.full})
      }
    })
  }

  getChampionList = () => {
    axios.get('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/pt_BR/champion.json')
      .then((response) => {
        this.setState({championsNames: Object.values(response.data.data)})
      })
      .catch((error) => {
        window.alert(error)
      })
    }
    
    render() {
      console.log(this.state.championsNames)
      console.log(this.state.championId)
      console.log(this.state.championImage)
    return(
      <main>
        <select onChange={this.getChampionId}>
          <option disabled selected>Escolha um campeão da lista</option>
         {this.state.championsNames.map((champion) => {
           return(
            <option onClick={() => this.getChampionId(champion.key)} key={champion.key}>{champion.name}</option>
           )
         })}
        </select>
        {this.state.champDetailsPage &&
        <div>
         <h3>Sobre o campeão</h3>
         <img alt='champion' src={this.state.championImage} />
         <h4>Também conhecido(a) como:</h4> 
         <p>{this.state.championTitle}</p>
        </div>}
      </main>
    )
  }
}
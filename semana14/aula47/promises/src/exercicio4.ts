import axios from 'axios'
// a. Ela do tipo void, pois não retorna resultados
// b. 

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

const makeNews = async(title: string, content: string, date: number): Promise<void> => {
  try {
  const body = {
    title,
    content,
    date
  }
    await axios.put(`${baseUrl}/news`, body)
  } catch (error) {
    console.log(error)
  }
}

// makeNews(
//   'O fim de Wennerstrom', 
//   'Mikael Blomkvist lança uma matéria bombástica na qual compara Wennerstrom a gangsters comuns', 
//   Date.now()
// )
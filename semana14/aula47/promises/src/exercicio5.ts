import axios from 'axios'
// a. Não é recomendado usar um forEach, pois essas funções de iteração do JS 
// podem dar erro ao serem utilizadas para requisições
// b. 

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

type user = {
  id: string,
  name: string,
  email: string
}

async function getAllUsers(): Promise<any[]> {
  try {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    console.log(users.data)
    return users.data
  } catch (error) {
    console.log(error)
  }
}

const sendMessage = async(users: user[], message: string): Promise<void> => {
  const promiseArray: Promise<any>[] = []  
  try {
    for(const user of users) {
      await axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: user.id,
        message
      })
    }
    console.log('mensagem enviada para os usuários')
  } catch (error) {
    console.log('aconteceu um erro na requisição')
  }
}


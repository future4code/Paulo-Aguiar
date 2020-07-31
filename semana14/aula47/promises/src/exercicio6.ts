import axios from 'axios'
// a. Ele recebe um array de promises e retorna apenas uma promise, 
// que se dá por concluída apenas quando todas as outras promises dentro
// dela forem concluídas
// b. A vantagem é que precisamos utilizar apenas um await ao final, ou
// teríamos que utilizar um await para cada requisição
// c.

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
  let promiseArray: Promise<any>[] = []  
  try {
    for(const user of users) {
      promiseArray.push(
        axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: user.id,
        message
      }))
    }
    await Promise.all(promiseArray)
    console.log('mensagem enviada para os usuários')
  } catch (error) {
    console.log('aconteceu um erro na requisição')
  }
}


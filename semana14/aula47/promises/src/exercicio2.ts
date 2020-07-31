import axios from 'axios'
// a. Aqui o async vem depois do nome da função
// b. 

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

const getAllUsers = async(): Promise<any[]> => {
  try {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    console.log(users.data)
    return users.data
  } catch (error) {
    console.log(error)
  }
}

getAllUsers()
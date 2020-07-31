import axios from 'axios'
// a. O endpoint utilizado é o GET /subscribers/all
// b. Podemos utilizar o tipo Promise<any>
// c.

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

async function getAllUsers(): Promise<any[]> {
  try {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    console.log(users.data)
    return users.data
  } catch (error) {
    console.log(error)
  }
}

getAllUsers()
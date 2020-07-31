import axios from 'axios'
// a. Nenhum erro de tipagem, pois cobrimos os três parâmetros que a API retorna como usuário
// b. Fazendo um map, conseguimos colocar o resultado retornado do jeito que quisermos

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

type user = {
  id: string,
  name: string,
  email: string
}

const getAllUsers = async(): Promise<user[]> => {
  try {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    console.log(users.data)
    return users.data.map((user: any) => {
      return{
        id: user.id,
        name: user.name,
        email: user.email
      }
    })
  } catch (error) {
    console.log(error)
  }
}

getAllUsers()
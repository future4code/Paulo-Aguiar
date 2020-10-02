import axios from 'axios'

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

type user = {
  id: string,
  name: string,
  email: string
}

const getAllUsers = async(): Promise<user[]> => {
  try {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
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

// a.
async function newSubscriber(name: string, email: string): Promise<void> {
  try {
    const body = {
      name,
      email
    }
    await axios.put(`${baseUrl}/subscribers`, body)
    console.log('Novo assinante cadastrado')
  } catch (error) {
    console.log('aconteceu um erro na requisição')
  }
}
// b.
async function createNew(title: string, content: string, date: number): Promise<void> {
  try {
    const body = {
      title,
      content,
      date: Date.now()
    }
    await axios.put(`${baseUrl}/news`, body)
    console.log('notícia criada com sucesso')
  } catch (error) {
    console.log('ocorreu um erro ao criar a notícia')
  }
}

async function sendNotification(users: user[], message: string): Promise<void> {
  try {
    let allPromises: Promise<void>[] = []
    for(const user of users) {
      const body = {
        subscriberId: user.id,
        message
      }
      allPromises.push(
        axios.post(`${baseUrl}/notifications/send`, body)
      )
    }
    await Promise.all(allPromises)
  } catch (error) {
    console.log('aconteceu um erro ao enviar as notificações')
  }
}

// getAllUsers()
// .then((response) => {
//   const users: user[] = response
//   createNew(
//       'O fim de Wennerstrom', 
//       'Mikael Blomkvist lança uma matéria bombástica na qual compara Wennerstrom a gangsters comuns', 
//       Date.now()
//     ).then(() => {
//       sendNotification(users, 'temos uma nova notícia para você sobre as indústrias Wennerstrom')
//     })
// })

// c.
async function getAllNotifications(): Promise<any> {
  
    const users = await getAllUsers()
    let allPromises: Promise<any>[] = []
    for(const user of users) {
      allPromises.push(
        axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
      )
    }
    const notifications = await Promise.all(allPromises)
    const allNotifications = notifications.map((response) => {
     response
    })
    console.log('notificações: ' + allNotifications)
    return allNotifications
}

// async function getNotification(): Promise<any> {
//   const notification = await axios.get(`${baseUrl}/subscribers/u2rvR1oxt3240wPETxW2/notifications/all`)
//   console.log(notification.data)
//   return notification
// }

function getNotification() {
  axios.get(`${baseUrl}/subscribers/u2rvR1oxt3240wPETxW2/notifications/all`)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log('algo deu errado')
  })
}

getNotification()




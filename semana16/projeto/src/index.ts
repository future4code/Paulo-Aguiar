import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from 'express'
import {AddressInfo} from 'net'

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

async function createUser(name: string, nickname: string, email: string): Promise<void> {
  const id = Math.round(Date.now()*(Math.random()))
  await connection
  .insert({id, name, nickname, email})
  .into("User")
}

app.put('/user', async (req: Request, res: Response) => {
  const name = req.body.name
  const nickname = req.body.nickname
  const email =  req.body.email

  if(!name || !nickname || !email) {
  res.status(400).send({Message: "Preencha todos os campos"})
  } else {
    try {
      await createUser(
        name,
        nickname,
        email
      )
      res.status(200).send({Message: "Usuário cadastrado com sucesso"})
    } catch (error) {
      res.status(400).send({Erro: error.message})
    }
  }
})

async function getUserById(id: string): Promise<any> {
  const user = await connection.raw(`
    SELECT * FROM User
    WHERE id = "${id}"
  `)
  let result = user[0]
  if(!id) {
    result = null
  }
  return result
}

app.get('/user/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const getUser = await getUserById(id)
  if(!id) {
    res.status(400).send("insira um id de usuário")
  } else if(getUser[0] === undefined) {
    res.status(400).send("não encontrado")
  } else {
    try {
      const user = {
        id: getUser[0].id,
        nickname: getUser[0].nickname
      }
      res.status(200).send(user)
    } catch (error) {
      res.status(400).send({error: error.message})
    }
  }
})

async function updateUser(
  id: string, 
  name?: string, 
  nickname?: string, 
  email?: string): Promise<void> {

  // await connection("User").update({attribute: `${name}`}).where({id: `${id}`})
}

app.post('/user/edit/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const name = req.body.name
  const nickname = req.body.nickname
  const email = req.body.email

  if(name === "") {
    res.status(400).send("preencha o campo que deseja modificar")
  }
  try {
    if(name) {
      await updateUser(id, name)
    }
    if(nickname) {
      await updateUser(id, nickname)
    }
    if(email) {
      await updateUser(id, email)
    }
    res.status(200).send("usuário modificado com sucesso")
  } catch (error) {
    res.status(400).send({error: error.message})
  }
})
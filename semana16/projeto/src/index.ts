import moment from "moment"
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
  email?: string
): Promise<void> {
  
  name && await connection("User").update({name: `${name}`}).where({id: `${id}`})
  nickname && await connection("User").update({nickname: `${nickname}`}).where({id: `${id}`})
  email && await connection("User").update({email: `${email}`}).where({id: `${id}`})
}

app.post('/user/edit/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const name = req.body.name
  const nickname = req.body.nickname
  const email = req.body.email

  if(name === "" || nickname === "" || email === "") {
    res.status(400).send("Os campos não podem ficar vazios")
  } else {
    try {
      await updateUser(id, name, nickname, email)
      res.status(200).send("usuário modificado com sucesso")
    } catch (error) {
      res.status(400).send({error: error.message})
    }
  }
})

async function createNewTask(
  title: string,
  description: string,
  status: string,
  limitDate: moment.Moment,
  creatorId: string
): Promise<void> {
  const id = Math.round(Date.now()*(Math.random()))
  await connection.insert({
    id,
    title,
    description,
    status,
    limit_date: moment(limitDate, "DD/MM/YYYY").format("YYYY/MM/DD"),
    creator_id: creatorId
  }).into("Task")
}

app.put('/task', async (req: Request, res: Response) => {
  const title = req.body.title
  const description = req.body.description
  const status = req.body.status
  const limitDate = req.body.limit_date
  const creatorId = req.body.creator_id

  if(title === "" || description === "" || status === "" || limitDate === "" || creatorId === "") {
    res.status(400).send("Nenhum campo pode ser deixados em branco")
  } else {
    try {

      const task = await createNewTask(title, description, status, limitDate, creatorId)
    
      res.status(200).send("tarefa criada com sucesso")
      
    } catch (error) {
      res.status(400).send({error: error.message})
    }
  }
})

async function getTaskById(id: string): Promise<any> {
  const task = await connection.raw(`
    SELECT 
    Task.id as taskId,
    title, description,
    limit_date as limitDate,
    status,
    creator_id as creatorUserId,
    User.nickname as creatorUserNickname  
    FROM Task JOIN User
    WHERE Task.id = "${id}"
  `)
  return task[0][0]
}

app.get('/task/:id', async (req: Request, res: Response) => {
  const task = await getTaskById(req.params.id)
  const taskUpdate = {
    ...task,
    limitDate: moment(task.limitDate, "YYYY/MM/DD").format("DD/MM/YYYY")
  }
  if (task === undefined) {
    res.status(400).send("tarefa não encontrada, verifique se o id existe")
  } else {
    try {
      res.status(200).send(taskUpdate)
    } catch (error) {
      res.status(400).send({error: error.message})
    }
  }
})
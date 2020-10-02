import knex from "knex";
import dotenv from "dotenv";
import express, {Request, Response, response} from "express";
import { AddressInfo } from "net";
import {v4} from "uuid"
import generateId from "./services/generateId"
import UserDB from "./data/UserDB"
import UserAuth from "./data/Authentication";

dotenv.config();
const id = v4() as string

export const connection = knex({
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

const auth: UserAuth = new UserAuth()
const userDB: UserDB = new UserDB()
const newId: generateId = new generateId()

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

app.post('/signup', async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const id = newId.createNewId()

    await userDB.createNewUser(id, email, password)

    if(email === "" || email.indexOf('@') === -1 || password.length < 6) {
      throw Error("E-mail ou senha inválidos")
    }

    const userToken = auth.createNewToken(id)

    res.status(200).send({token: userToken})
  } catch (error) {
    res.status(400).send({message: error.sqlMessage || error.message})
  }
})

app.post('/login', async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    if(email === "" || email.indexOf('@') === -1) {
      throw Error("E-mail inválido")
    }
    const loginUser = await connection.raw(`
      SELECT id FROM User2
      WHERE password = "${password}"
      AND email = "${email}"
    `)
    if(!loginUser) {
      throw Error("E-mail ou senha incorretos")
    }
    const userToken = auth.createNewToken(loginUser[0][0].id)

    res.status(200).send({token: userToken})
  } catch (error) {
    res.status(400).send({message: error.sqlMessage || error.message})
  }
})

app.get('/user/profile', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string
    const userData = auth.getData(token)
    const user = await userDB.getUserById(userData.id)

    res.status(200).send({id: user.id, email: user.email})
  } catch (error) {
    res.status(400).send({message: error.sqlMessage || error.message})
  }
})

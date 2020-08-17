import knex from "knex";
import dotenv from "dotenv";
import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import {v4} from "uuid"
import generateId from "./services/generateId"
import UserDB from "./data/UserDB"
import UserAuth from "./data/UserAuth";

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

const token: UserAuth = new UserAuth()

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
    const loginUser = await connection.raw(`
      SELECT id FROM User2
      WHERE password = "${password}"
      AND email = "${email}"
    `)
    console.log(loginUser[0][0].id)
    if(!loginUser) {
      throw Error("E-mail ou senha incorretos")
    }
    const userToken = token.createNewToken(loginUser[0][0].id)

    res.status(200).send({token: userToken})
  } catch (error) {
    res.status(400).send({message: error.sqlMessage || error.message})
  }
})

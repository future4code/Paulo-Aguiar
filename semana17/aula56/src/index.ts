import knex from "knex";
import dotenv from "dotenv";
import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import generateId from "./services/generateId"
import UserDB from "./data/UserDB"
import Authenticator, {USER_ROLE} from "./data/Authenticator";
import HashManager from "./services/HashManager";
import BaseDB from "./data/BaseDB";

dotenv.config();

const app = express();

app.use(express.json());

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
    const {email, password, role} = req.body
    const id = new generateId().createNewId()

    const encryptedPassword = await new HashManager().encrypt(password)

    await new UserDB().createNewUser(id, email, encryptedPassword, role)

    if(email === "" || email.indexOf('@') === -1 || password.length < 6) {
      throw Error("E-mail ou senha inválidos")
    }

    const userToken = new Authenticator().createNewToken(id, role)

    res.status(200).send({token: userToken})
  } catch (error) {
    res.status(400).send({message: error.sqlMessage || error.message})
  }
  await BaseDB.destroyConnection()
})

app.post('/login', async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body

    if(email === "" || email.indexOf('@') === -1) {
      throw Error("E-mail inválido")
    }

    const userStoredInfo = await new UserDB().getUserByEmail(email)
    const passwordDecrypted = await new HashManager().verify(password, userStoredInfo.password)

    if(!passwordDecrypted) {
      throw Error("Senha incorreta")
    }

    const userToken = new Authenticator().createNewToken(userStoredInfo.id, userStoredInfo.role)

    res.status(200).send({token: userToken})
  } catch (error) {
    res.status(400).send({message: error.sqlMessage || error.message})
  }
  await BaseDB.destroyConnection()
})

app.get('/user/profile', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string
    const userData = new Authenticator().getData(token)
    const user = await new UserDB().getUserById(userData.id)

    if(user.role !== "NORMAL") {
      throw Error("Usuário não autorizado")
    }

    res.status(200).send({id: user.id, email: user.email, role: user.role})
  } catch (error) {
    res.status(400).send({message: error.sqlMessage || error.message})
  }
  await BaseDB.destroyConnection()
})

app.delete('/user/:id', async (req: Request, res: Response) => {
  try {
    const userDB: UserDB = new UserDB()
    const id = req.params.id
    const token = req.headers.authorization as string
    const userData = new Authenticator().getData(token)
    const user = await userDB.getUserById(userData.id)
    if(userData.role !== USER_ROLE.ADMIN) {
      throw Error("Usuário não autorizado para este tipo de ação")
    }

    await userDB.deleteUserById(id)
    res.status(200).send({Message: "Usuário deletado"})
    
  } catch (error) {
    res.status(400).send({Message: error.sqlMessage || error.message})
  }
  await BaseDB.destroyConnection()
})

app.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const token = req.headers.authorization as string
    const userData = new Authenticator().getData(token)
    const user = await new UserDB().getUserById(id)
    if(user.role === "ADMIN" || user.role === "NORMAL") {
      res.status(200).send({id: user.id, email: user.email, role: userData.role})
    } else {
      res.status(400).send({message: "Você não tem autorização para esta ação"})
    }
  } catch (error) {
    res.status(200).send({message: error.sqlMessage || error.message})
  }
  await BaseDB.destroyConnection()
})

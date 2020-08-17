import {connection} from "../index"
import {Request, Response} from "express"
import generateId from "../services/generateId"

const createId: generateId = new generateId()

export default class UserDB {
  public async createNewUser(req: Request, res: Response): Promise<void> {
    try {
      const {email, password} = req.body
      await connection.insert({
        id: createId.createNewId(),
        email,
        password
      }).into('User2')

      res.status(200).send({message: "usuário criado com sucesso"})
    } catch (error) {
      res.status(400).send({message: error.sqlMessage || error.message})
    }
  }
}
import {Request, Response} from "express"
import { UserSignupDTO } from "../model/User"
import { UserBusiness } from "../business/UserBusiness"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { BaseDatabase } from "../data/BaseDatabase"

export class UserController {
  public async signup(req: Request, res: Response) {
    try {
      const user: UserSignupDTO = {
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      } 
      const token = await new UserBusiness(
        new IdGenerator,
        new HashManager,
        new Authenticator
      ).signup(user)
      
      res.status(200).send({token: token})
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  BaseDatabase.destroyConnection()
  }
}
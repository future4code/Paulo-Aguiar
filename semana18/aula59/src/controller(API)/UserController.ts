import { Request, Response } from "express";
import {UserBusiness} from "../business(validador)/UserBusiness";
import { BaseDatabase } from "../data(ponteComDB)/BaseDatabase";

export default class UserController {
   async signup(req: Request, res: Response) {
    try {
      const input = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        role: req.body.role
      }
      const token = await new UserBusiness().newUser(input)

      res.status(200).send({token})
    } catch (error) {
      res.status(400).send({message: error.message})
    }
    await BaseDatabase.destroyConnection()
  }

  async login(req: Request, res: Response) {
    try {
      const input = {
        email: req.body.email,
        password: req.body.password
      }
  
      const accessToken = await new UserBusiness().login(input)
      
      res.status(200).send({accessToken})
      
    } catch (error) {
      res.status(400).send({message: error.message})
    }
    BaseDatabase.destroyConnection()
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string
      const userList = await new UserBusiness().getAllUsers(token)

      res.status(200).send(userList)
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  }

  async deleteUserById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string
      const id = req.params.id

      await new UserBusiness().deleteUser(token, id)

      res.status(200).send({message: "User deleted successfully"})
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  }
}
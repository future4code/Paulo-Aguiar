import { IdGenerator } from "../services(serviçosExtras)/IdGenerator";
import { HashManager } from "../services(serviçosExtras)/HashManager";
import {UserDatabase} from "../data(ponteComDB)/UserDatabase";
import { Authenticator } from "../services(serviçosExtras)/Authenticator";

export class UserBusiness {
  public async newUser(user: any) {
    try {
      if(!user.name || !user.email || !user.password || !user.role) {
        throw new Error("All fields required")
      }
      if(user.email.indexOf("@") === -1) {
        throw new Error("Invalid e-mail")
      }
      if(user.password.length < 6) {
        throw new Error("Password must have at least 6 characters")
      }

      const role = user.role
      const id = new IdGenerator().generate()
      const hashPassword = await new HashManager().hash(user.password)
      await new UserDatabase().signup(id, user.name, user.email, hashPassword, user.role)
      const token = new Authenticator().generateToken({id, role})
      return token
    } catch (error) {
      throw new Error(error.message || "Error creating user, please check your system administrator")
    }
  }

  public async login(user: any) {
    if(!user.email || !user.password) {
      throw new Error('Preencha todos os campos')
    }

    const DBUser = await new UserDatabase().getUserByEmail(user.email)
    const hashPass = await new HashManager().compare(user.password, DBUser.password)

    const accessToken = new Authenticator().generateToken({id: DBUser.id, role: DBUser.role})

    if(!hashPass) {
      throw new Error("Invalid password")
    }
    return accessToken
  }

  public async getAllUsers(token: string) {
    new Authenticator().getData(token)
    const userList = new UserDatabase().getAllUsers()
    return userList
  }

  public async deleteUser(token: string, id: string) {
   const loggedUser = new Authenticator().getData(token)
   console.log(loggedUser)
   
   if(loggedUser.role !== "ADMIN") {
      throw new Error("You don't have permission to be here")
   }

   return await new UserDatabase().deleteUser(id)
  }
}
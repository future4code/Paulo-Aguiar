import { User, UserSignupDTO } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ){}

  public async signup(user: UserSignupDTO) {
    if(!user.name || !user.email || !user.password) {
      throw new Error("Preencha todos os campos")
    }

    const id = this.idGenerator.generate()
    const password = await this.hashManager.hash(user.password)
    
    const userToData = new User(
      id, 
      user.name,
      user.email,
      password,
      User.stringToUserRole(user.role)
      ) 
      
    await new UserDatabase().signup(userToData)
    const token = this.authenticator.generateToken({id, role: user.role})

    return token
  }
}
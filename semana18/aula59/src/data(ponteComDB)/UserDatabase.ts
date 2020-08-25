import {BaseDatabase} from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";

  public async signup(
    id: string,
    name: string,
    email: string,
    password: string,
    role?: string
  ): Promise<void> {
    try {
      await this.getConnection()
      .insert({id, name, email, password, role})
      .into(UserDatabase.TABLE_NAME)
    } catch (error) {
      throw new Error(error.sqlmessage || error.message)
    }
  } 

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const user = await this.getConnection().raw(`
        SELECT * FROM ${UserDatabase.TABLE_NAME}
        WHERE email = "${email}"
      `)
      if(!user[0][0]) {
        throw new Error ("Usuário não encontrado")
      }

      return user[0][0]

    } catch (error) {
      throw new Error(error.sqlmessage || error.message)
    }

  }
  public async getAllUsers(): Promise<any> {
    try {
      const users = await this.getConnection().raw(`
        SELECT * FROM ${UserDatabase.TABLE_NAME}
      `)
      return users[0]
    } catch (error) {
      throw new Error(error.sqlmessage || error.message)
    }
  }

  public async deleteUser(id: string): Promise<void> {
    try {
      await this.getConnection().raw(`
        DELETE FROM ${UserDatabase.TABLE_NAME}
        WHERE id = "${id}"
      `)
    } catch (error) {
      throw new Error(error.sqlmessage || error.message)
    }
  }
}

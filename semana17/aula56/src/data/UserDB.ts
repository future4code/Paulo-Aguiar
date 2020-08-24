import BaseDB from "./BaseDB"

export default class UserDB extends BaseDB {
  public async createNewUser(
    id: string, 
    email: string, 
    password: string, 
    role?: string
  ): Promise<void> {
    await this.makeConnection().insert({
      id,
      email,
      password,
      role
    }).into('User2')
  }

  public async deleteUserById(id: string): Promise<void> {
    await this.makeConnection().raw(`
      DELETE FROM User2
      WHERE id = "${id}"
    `)
  }

  public async getUserById (id: string): Promise<any> {
  const user = await this.makeConnection().raw(`
    SELECT * FROM User2
    WHERE id = "${id}"
  `)
  return user[0][0]
  }
  
  public async getUserByEmail(email: string): Promise<any> {
  const info =  await this.makeConnection().raw(`
      SELECT * FROM User2
      WHERE email = "${email}"
  `)
  return info[0][0]
  }
}
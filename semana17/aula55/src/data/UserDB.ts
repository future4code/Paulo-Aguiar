import {connection} from "../index"

export default class UserDB {
  public async createNewUser(id: string, email: string, password: string): Promise<void> {
    await connection.insert({
      id,
      email,
      password
    }).into('User2')
  }

  public async getUserById (id: string): Promise<any> {
  const user = await connection.raw(`
    SELECT * FROM User2
    WHERE id = "${id}"
  `)
  return user[0][0]
  }
  public async getUserByEmail(email: string): Promise<any> {
  const info =  await connection.raw(`
      SELECT * FROM User2
      WHERE email = "${email}"
  `)
  return info[0][0]
  }
}
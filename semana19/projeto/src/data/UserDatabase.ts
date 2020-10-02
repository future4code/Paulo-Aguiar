import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE = "User_Table"

  public async signup(user: User): Promise<void> {
    await this.getConnection().insert({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole()
    }).into(UserDatabase.TABLE)
  }
}
import * as jwt from "jsonwebtoken"

export default class UserAuth {
  private static EXPIRES_IN = "1min"
  public createNewToken(id: string) {
    const token = jwt.sign(
      {
        id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: UserAuth.EXPIRES_IN
      }
    )
    return token
  }
}
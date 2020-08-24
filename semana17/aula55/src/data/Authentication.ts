import * as jwt from "jsonwebtoken"

export default class UserAuth {
  public createNewToken(id: string) {
    const token = jwt.sign(
      {
        id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.JWT_EXPIRES_IN
      }
    )
    return token
  }
  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
      id: payload.id
    }
    console.log(payload)
    return result
  }
}

interface AuthenticationData {
  id: string
}
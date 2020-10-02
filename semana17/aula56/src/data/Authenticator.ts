import * as jwt from "jsonwebtoken"

enum USER_ROLE {
  NORMAL,
  ADMIN
}

export default class Authenticator {
  public createNewToken(id: string, role: USER_ROLE) {
    const token = jwt.sign(
      {
        id, role
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
      id: payload.id,
      role: payload.role
    }
    console.log(payload)
    return result
  }
}

interface AuthenticationData {
  id: string,
  role: USER_ROLE
}
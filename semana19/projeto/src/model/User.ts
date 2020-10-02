export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role?: USER_ROLE
  ){}

  public getId() {return this.id}
  public getName() {return this.name}
  public getEmail() {return this.email}
  public getPassword() {return this.password}
  public getRole() {return this.role}

  public setId(id: string) {this.id = id}
  public setName(name: string) {this.name = name}
  public setEmail(email: string) {this.email = email}
  public setPassword(password: string) {this.password = password}
  public setRole(role: USER_ROLE) {this.role = role}
  
  static stringToUserRole(input: string | undefined): USER_ROLE{
    const inputUpperCase = input?.toUpperCase()
    switch (inputUpperCase) {
        case "NORMAL":
          return USER_ROLE.NORMAL;
        case "ADMIN":
          return USER_ROLE.ADMIN;
        case undefined:
          return USER_ROLE.NORMAL
        default:
          throw new Error("Invalid user role");
      }
  }
}

export interface UserSignupDTO {
  name: string,
  email: string,
  password: string,
  role?: string
}

export enum USER_ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
} 

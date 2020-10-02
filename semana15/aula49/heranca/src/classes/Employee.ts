import User from './User'
import { stringify } from 'querystring'

export default class Employee extends User {
  protected admissionDate: string
  protected baseSalary: number
  static BENEFITS_VALUE: number = 400

  constructor(
    admissionDate: string,
    baseSalary: number,

    id: string,
    email: string,
    name: string,
    password: string,
  ) {
    super(id, email, name, password)
    this.admissionDate = admissionDate
    this.baseSalary = baseSalary
  }

  public calculateTotalSalary() {
    return this.baseSalary += Employee.BENEFITS_VALUE
  }

  public getAdmissionDate() {
    return this.admissionDate
  }

  public getBaseSalary() {
    return this.baseSalary
  }

}
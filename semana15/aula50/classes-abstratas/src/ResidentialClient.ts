import { Residence } from "./Residence"
import Client from "./Client"

export default class ResidentialCliente extends Residence implements Client {
  private cpf: string

  public name: string
  public registrationNumber: number
  public consumedEnergy: number

  constructor(
    cpf: string, 
    residentsQuantity: number, 
    cep: string,
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    ) {
    super(residentsQuantity, cep)
    this.cpf = cpf
    this.name = name
    this. registrationNumber = registrationNumber
    this.consumedEnergy = consumedEnergy
  }

  public calculateBill() {
    return this.consumedEnergy * 0.75
  }

  public getCpf() {
    return this.cpf
  }
}
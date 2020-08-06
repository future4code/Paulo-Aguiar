import { Commerce } from "./Commerce";
import Client from "./Client";

export default class CommercialClient extends Commerce implements Client {
  constructor (
    private cnpj: string,

    public consumedEnergy: number,
    public name: string,
    public registrationNumber: number,
    floorsQuantity: number,
    cep: string,

  ) {
    super(floorsQuantity, cep)
  }
 
  public calculateBill() {
    return this.consumedEnergy * 0.53
  }

}
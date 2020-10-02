import { Industry } from "./Industry";
import Client from "./Client";

export default class IndustrialClient extends Industry implements Client {
  constructor(
    private industryNumber: string,
    
    public name: string,
    public consumedEnergy: number,
    public registrationNumber: number,
    machinesQuantity: number,
    cep: string,
  ) {
    super(machinesQuantity, cep)
  }

  public getIndustryNumber(): string {
    return this.industryNumber
  }

  public calculateBill(): number {
   return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
  }

}
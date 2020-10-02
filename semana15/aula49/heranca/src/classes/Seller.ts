import Employee from './Employee'

export default class Seller extends Employee {
  private salesQuatity: number = 0
  static SELLING_COMISSION: number = 5


  public getSalesQuantity() {
    return this.salesQuatity
  }

  public calculateTotalSalary() {
    return this.baseSalary + Employee.BENEFITS_VALUE + Seller.SELLING_COMISSION * this.salesQuatity
  }

  public setSalesQuantity(sales: number): void {
    this.salesQuatity += sales
  }
}
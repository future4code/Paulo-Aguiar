import Client from "./Client";

export default class ClientManager {
  constructor(
    private clients: Client[] = []
  ) {}

  public registerClient(client: Client): void {
    this.clients.push(client)
  }

  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber
    })
    if(foundClient) {
      return foundClient.calculateBill()
    }
    return 0
  }

  public calculateTotalIncome() {
    let totalIncome: number = 0
    this.clients.map((client: Client) => {
      totalIncome += client.calculateBill()
    })
    return totalIncome.toFixed(2)
  }

  public deleteUser(registrationNumber: number) {
    let updatedClients: Client[] = []
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber
    })
    if(foundClient) {
      updatedClients = this.clients.filter((client) => {
        return client != foundClient
      })
    }
    return this.clients = updatedClients
  }

  public getClientsQuantity() {
    return this.clients.length
  }

  public getClientsNames() {
    return this.clients.map((client) => {
      return client.name
    })
  }
}
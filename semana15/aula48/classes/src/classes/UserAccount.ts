import Transaction from './Transaction'

export default class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

    public getCpf(): string {
      return this.cpf
    }

    public getBalance(): number {
     return this.balance
    }

    public getName(): string {
      return this.name
    }

    public getAge(): number {
      return this.age
    }

    public getTransactions(): Transaction[] {
      return this.transactions
    }

    public addBalance(value: number): void {
    //Aqui deve ser inserida a lógica de adicionar saldo 
      console.log('Saldo atualizado com sucesso')
    }
}
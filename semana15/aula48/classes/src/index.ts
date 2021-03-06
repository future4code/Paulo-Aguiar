/* 
1) O construtor é o responsável por receber os parâmetros de guardar dentro da classe.
podemos chamá-lo quando criamos uma nova classe, no caso, const userAccount = new UserAccount
2) Apenas uma vez 
3) Através do getters, que são funções dentro da classe que retornam essas propriedades
4) sim, ver linha 12
*/
import UserAccount from "./classes/UserAccount"
import Bank from "./classes/Bank"
import JSONFileManager from "./classes/JSONFileManager"

const func: string = process.argv[2]
const fileManager: JSONFileManager = new JSONFileManager("./data.json")
const newBank: Bank = new Bank([], fileManager)

function getAllAccounts(): UserAccount[] {
  return fileManager.getObjectFromFile()
}

function createAccount(name: string, cpf: string, age: number): void {
  const newUserAccount: UserAccount = new UserAccount(name, cpf, age)
  newBank.createAccount(newUserAccount)
}

function showBalance(cpf: string, name: string) {
  const allAccounts = fileManager.getObjectFromFile()
  let balance: number
  allAccounts.map((account: any) => {
    if(account.cpf === cpf && account.name === name) {
      balance = account.balance
    } else {
      console.log('informe nome e CPF do titular')
    }
  })
  console.log(balance)
}

switch(func) {
  case 'criar-conta':
    createAccount(process.argv[3], process.argv[4], Number(process.argv[5]))
    break
  case 'ver-saldo':
    showBalance(process.argv[3], process.argv[4])
}

// console.log(bancoItaú.getAllAccounts())




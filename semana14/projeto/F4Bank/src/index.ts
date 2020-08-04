import * as fs from 'fs'
import * as moment from 'moment'
import axios from 'axios'
import { runInNewContext } from 'vm'
import { join } from 'path'

type extract = {
  value: number,
  date: moment.Moment,
  description: string
}

type account = {
  userName: string,
  userCpf: string,
  userBirthday: moment.Moment,
  balance: number
  accExtract: extract[]
}

const func: string = process.argv[2]

function getAllUsers () {
  const dataAsString: string = fs.readFileSync("./data.json").toString()
  try {
    const data = JSON.parse(dataAsString)
    let userNames = data.map((account: account) => {
      return account.userName
    })
    console.log(userNames)
  } catch (error) {
    console.log('erro ao ler usuários')
  }
}

function getAllAccounts() {
  const dataAsString: string = fs.readFileSync('./data2.json').toString()
  const data: account[] = JSON.parse(dataAsString)
  return data
}

function createAccount(name: string, cpf: string, birthday: string) {
  const allAccounts: account[] = getAllAccounts()
  const newAccount: account = {
    userName: name,
    userCpf: cpf,
    userBirthday: moment(birthday, 'DD/MM/YYYY'),
    balance: 0,
    accExtract: []
  }
  const allCpfs: string[] = allAccounts.map((account) => {
    return account.userCpf
  })
  
  let agePass = false
  let cpfPass = false

  moment().diff(newAccount.userBirthday, 'years') > 18 ? agePass = true :
  console.log('apenas pessoas maiores de 18 anos podem abrir uma conta')

  !allCpfs.includes(newAccount.userCpf) ? cpfPass = true : 
  console.log('este CPF já está cadastrado')

  if(agePass && cpfPass) {
    const updatedAccounts: account[] = [...allAccounts, newAccount]
    try {
      const newAccountAsJson = JSON.stringify(updatedAccounts, null, 2)
      fs.writeFileSync("./data2.json", newAccountAsJson)
    } catch (error) {
      console.log('erro ao criar a conta')
    }
  }
}

function deposit(name: string, cpf: string, value: number) {
  const accounts: account[] = getAllAccounts()
  accounts.forEach((account: account) => {
    if(account.userName === name && account.userCpf === cpf) {
      account.balance += value
      const index = accounts.indexOf(account)
      accounts[index] = account
      const newBalanceAsJson = JSON.stringify(accounts, null, 2)
      fs.writeFileSync("./data2.json", newBalanceAsJson)
      console.log('saldo adicionado com sucesso, seu novo saldo é de: ' + account.balance.toFixed(2))
      console.log(accounts)
    }
  })
}

function showBalance(cpf: string) {
  const accounts = getAllAccounts()
  accounts.forEach((account: account) => {
    if(account.userCpf === cpf) {
      console.log('O saldo da conta pertencente a ' + account.userName + ' é de: ' + account.balance.toFixed(2))
    }
  })
}

function payment(cpf: string, value: number, description: string, date?: string) {
 const accounts = getAllAccounts()
  accounts.forEach((account: account) => {
    if(account.userCpf === cpf) {
      let newExtract: extract
      if(value <= account.balance) {
        account.balance -= value
        if(date) {
          newExtract = {
            value,
            date: moment(date, 'DD/MM/YYYY'),
            description
          }
        } else {
            newExtract = {
              value,
              date: moment(),
              description
            }
        }
        account.accExtract.push(newExtract)
        accounts[accounts.indexOf(account)] = account
        const newDataAsJson = JSON.stringify(accounts, null, 2)
        fs.writeFileSync("./data2.json", newDataAsJson)
      }
    }
  })
}

switch(func) {
  case 'listar-usuarios':
    getAllUsers()
    break
  case 'criar-conta':
    createAccount(process.argv[3], process.argv[4], process.argv[5])
    break
  case 'listar-contas':
    getAllAccounts()
    break
  case 'adicionar-saldo':
    deposit(process.argv[3], process.argv[4], Number(process.argv[5]))
    break
  case 'pegar-saldo':
    showBalance(process.argv[3])
    break
  case 'pagar-conta':
    payment(process.argv[3], Number(process.argv[4]), process.argv[5], process.argv[6])
}

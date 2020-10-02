import UserAccount from "./UserAccount";
import JSONFileManager from "./JSONFileManager";

export default class Bank {
  private accounts: UserAccount[]
  private fileManager: JSONFileManager

  constructor(
    accounts: UserAccount[],
    fileManager: JSONFileManager
  ) {
    this.accounts = accounts
    this.fileManager = fileManager
  }

  public createAccount(UserAccount: UserAccount): void {
    let allAccounts = this.fileManager.getObjectFromFile()
    let allAccountsUpdate = [...allAccounts, UserAccount]
    this.fileManager.writeObjectToFile(allAccountsUpdate)
  }

  public getAllAccounts(): UserAccount[] {
    return this.fileManager.getObjectFromFile()
  }

  public getAccountByCpfAndName(cpf: string, name: string): UserAccount | undefined {
    let accountCopy: UserAccount
    this.accounts.forEach((account: UserAccount) => {
      if(account.getCpf() === cpf && account.getName() === name) {
        accountCopy = account
      }
    })
    console.log(accountCopy)
    return accountCopy
  }
}
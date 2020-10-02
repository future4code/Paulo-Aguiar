/* 
1)----------------
a) foi possível imprimir todas as propriedades, pois nenhuma está encapsulada
2)----------------
a) Cannot create an instance of an abstract class
b) Precisamos primeiro adicionar uma classe filha para ela
4)----------------
a) Possui todas as propriedades da classe e da interface as quais ela herdou, 
além do método herdado da interface, pois a interface deixa para as filhas 
implementarem os métodos
5)-----------------
a) Elas possuem todos os mesmos atributos e método herdados
b) A diferença é o cpf / cnpj
6)------------------
a) Deve ser filha da classe Industry, pois ela é um local industrial
b) Deve implementar a classe Client, pois ela é um cliente
c) Porque o machinesQuantity já tem um get na classe mãe e os atributos da interface
são todo públicos.
*/

import Place from './Place'
import Client from "./Client"
import { Residence } from './Residence'
import { Commerce } from './Commerce'
import { Industry } from './Industry'
import CommercialClient from './CommercialClient'
import ClientManager from './ClientManager'

// const clientWhellyda: Client = {
//   name: 'Whellyda',
//   registrationNumber: 1,
//   consumedEnergy: 200,
//   calculateBill() {
//     return this.consumedEnergy
//   } 
// }

// console.log(clientWhellyda.calculateBill())
// console.log(clientWhellyda.consumedEnergy)
// console.log(clientWhellyda.name)
// console.log(clientWhellyda.registrationNumber)

// const newResidence: Residence = new Residence(3, '78699-223')
// const newCommerce: Commerce = new Commerce(2, '98763-222')
// const newIndustry: Industry = new Industry(5, '74187-699')

// console.log(newResidence.getCep())
// console.log(newCommerce.getCep())
// console.log(newIndustry.getCep())

const comercialClient: CommercialClient = new CommercialClient('46529', 20, 'Baiano', 1, 1, '74699-222')
const comercialClient1: CommercialClient = new CommercialClient('46522', 10, 'Paraense', 2, 1, '74522-000')
const comercialClient3: CommercialClient = new CommercialClient('46516', 30, 'Goiano', 3, 1, '74522-001')

const clientManager: ClientManager = new ClientManager([])

clientManager.registerClient(comercialClient)
clientManager.registerClient(comercialClient1)
clientManager.registerClient(comercialClient3)
clientManager.deleteUser(1)
console.log(clientManager.calculateTotalIncome())
console.log(clientManager.getClientsQuantity())
console.log(clientManager.calculateBillOfClient(1))
console.log(clientManager.calculateBillOfClient(2))
console.log(clientManager.calculateBillOfClient(3))
console.log(clientManager.getClientsNames())

// type person = {
//   name: string
// }

// function createPerson(name: string): person {
// 	return {name: name} 
// } 

// const myPerson2 = createPerson("Robson");

// console.log(myPerson2);
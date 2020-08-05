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

*/

import Place from './Place'
import Client from "./Client"
import { Residence } from './Residence'
import { Commerce } from './Commerce'
import { Industry } from './Industry'
import CommercialClient from './CommercialClient'

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

const newResidence: Residence = new Residence(3, '78699-223')
const newCommerce: Commerce = new Commerce(2, '98763-222')
const newIndustry: Industry = new Industry(5, '74187-699')

console.log(newResidence.getCep())
console.log(newCommerce.getCep())
console.log(newIndustry.getCep())

const comercial: CommercialClient = new CommercialClient('46529')

// type person = {
//   name: string
// }

// function createPerson(name: string): person {
// 	return {name: name} 
// } 

// const myPerson2 = createPerson("Robson");

// console.log(myPerson2);
/*
 1)-------------------------
 a) não é possível imprimir, pois ela não tem um método getter associado
 b) apenas uma vez
 // const userPaulita = new User('1', 'pauladjanine@hotmail.com', 'Paula Djanine', 'papis')
 // console.log(userPaulita.getEmail())
 // console.log(userPaulita.getId())
 // console.log(userPaulita.getName())
 2)-------------------------
 a) apenas uma vez
 b) apenas uma vez
 3)--------------------------
 a) não é possíve, pois a senha ainda continuar privada
 4)--------------------------
 a) apenas uma vez
 b) admissionDate, baseSalary, email, id, name
 8)----------------------------
 a) admissionDate, baseSalary, email, id, name, password
 b) não consegui imprimir a senha, pois ela é privada
 9)---------------------------
 a) não é possível, pois o salesQuantity é privado
 10)------------------------
 a) foi impresso o salário conforme a fómula passada, 
 então o override foi realizado automaticamente quando passamos uma fórmula para
 o método da classe pai
 */
import User from './classes/User'
import Customer from './classes/Customer'
import Employee from './classes/Employee'
import Seller from './classes/Seller'

// const customerWhelly = new Customer('1', 'whelly@gmail.com', 'Whellyda Thayanne', 'alhamdulillah', '9625 8965 7154 2598')

// console.log(customerWhelly.getCreditCard())
// console.log(customerWhelly.getEmail())
// console.log(customerWhelly.getId())
// console.log(customerWhelly.getName())
// console.log(customerWhelly.purchaseTotal)
// console.log(customerWhelly.introduceYourself())

// const employeeKhaleda = new Employee('23/07/2019', 2300, '1', 'khalebei@gmail.com', 'Khaleda Bei', 'astaghfurillah')

// console.log(employeeKhaleda)
// console.log(employeeKhaleda.getAdmissionDate())
// console.log(employeeKhaleda.getBaseSalary())
// console.log(employeeKhaleda.getEmail())
// console.log(employeeKhaleda.getId())
// console.log(employeeKhaleda.getName())
// console.log(employeeKhaleda.calculateTotalSalary())

// const sellerPaulo = new Seller('25/10/2020', 13400, '1', 'paulo@gmail.com', 'Paulo Aguiar', '175852')

// console.log(sellerPaulo.getAdmissionDate())
// console.log(sellerPaulo.getBaseSalary())
// console.log(sellerPaulo.getEmail())
// console.log(sellerPaulo.getId())
// console.log(sellerPaulo.getName())
// sellerPaulo.setSalesQuantity(10)
// console.log(sellerPaulo.getSalesQuantity())

const sellerWhellyda = new Seller('06/12/2018', 15000, '2', 'whelly@hotmail.com', 'Whellyda', 'mashallah')

sellerWhellyda.setSalesQuantity(10)
console.log(sellerWhellyda.calculateTotalSalary())
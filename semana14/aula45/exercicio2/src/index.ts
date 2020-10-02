const operation: string = process.argv[2]
const number1: number = Number(process.argv[3]) 
const number2: number = Number(process.argv[4]) 
let result: number | string

switch(operation) {
  case 'add':
    result = number1 + number2
    break
  case 'sub':
    result = number1 - number2
    break
  case 'mult':
    result = number1 * number2
    break
  case 'div':
    result = number1/number2
    break
  default:
  result = ('escolha uma operação matemática: add, sub, mult, div')
}

console.log('O resultado é ' + result)
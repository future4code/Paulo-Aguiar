// a. usamos a propriedade process.argv[i] sendo 'i' o indice do parâmetro que queremos acessar
const myName: string = process.argv[2]
const myAge: number = Number(process.argv[3])
const myAgePlusSeven: number = Number(process.argv[3]) + 7

console.log(`Olá, ${myName}! Você tem ${myAge} anos. Em sete anos você terá ${myAgePlusSeven}`)
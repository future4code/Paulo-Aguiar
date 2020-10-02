// a. acontece um erro dizendo que o type 1 não é do type string
let minhaString: string = 1 


// b. podemos colocar  uma barrinha separando os diferentes tipos de variável 
// que queremos atribuir.
let meuNumero: number | string = 'eu'

// c.
let Paulita: {
  nome: string,
  idade: number,
  corFavorita: string
}

Paulita = {
  nome: 'Paula',
  idade: 25,
  corFavorita: 'rosa'
}
// d./e.
enum coresDoArcoIris {
  VIOLETA = 'violeta',
  ANIL = 'anil',
  AZUL = 'azul',
  VERDE = 'verde',
  AMARELO = 'amarelo',
  LARANJA = 'laranja',
  VERMELHO = 'vermelho'
}
type pessoa = {
  nome: string,
  idade: number,
  corFavorita: coresDoArcoIris
}


const whellyda: pessoa = {
  nome: 'Whellyda',
  idade: 21,
  corFavorita: coresDoArcoIris.VIOLETA
}

const iagay: pessoa = {
  nome: 'Iago',
  idade: 28,
  corFavorita: coresDoArcoIris.VERDE
}

const khalebei: pessoa = {
  nome: 'Khaleda',
  idade: 23,
  corFavorita: coresDoArcoIris.VERMELHO
}


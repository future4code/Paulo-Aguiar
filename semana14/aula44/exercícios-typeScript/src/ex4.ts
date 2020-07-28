type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

/* 
a. para transpilarmos este arquivo Typescript para Javascript, basta, no terminal, 
escrevermos tsc ex4.ts
b. para acessar o arquivo de uma pasta de nome src, basta o comando tsc src/ex4.ts
c. para transpilar mais de um arquivo, basta separar estes por espaço. 
Ex: tsc ex1.ts ex2.ts. Também podemos apenas digitar tsc para transpilar todos os arquivos .ts da pasta
d. O arquivo criado com o comando tsc --init está configurado para uma versão mais antiga do Javascript
(es5) e o arquivo criado em aula tem bem mais opções ativas
*/ 
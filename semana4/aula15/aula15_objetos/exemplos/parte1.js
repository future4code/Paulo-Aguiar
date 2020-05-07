const cachorro = {
  nome: 'Snoopy',
  raca: 'Beagle',
  peso: 10,
  vacinas: ['raiva', 'v10', 'leishmaniose']
};
//
// console.log(cachorro);
//
// //notação do ponto
//
// let nomeDoCachorro = cachorro.nome;
//
//
// //notação de colchetes
// const nomeCachorrinho = 'raca';
// nomeDoCachorro = cachorro[nomeCachorrinho];
// console.log(nomeDoCachorro);
//
// //alterando as propriedades
//
// cachorro.nome = 'Luna';
// cachorro['raca'] = 'yorkshire';
// console.log(cachorro);
//
// const array = [1, 2, 3];
// console.log(array);
//
// console.log(cachorro.vacinas);

// Desestruturação

const novoCachorro = {
  ...cachorro,
  nome: 'Bolinha',
  cor: 'mel',
  latir: function() {console.log('AU AU')}
};

console.log(novoCachorro.latir());

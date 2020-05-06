const filme = {
  nome: 'Django Livre',
  diretor: 'Quentin Tarantino',
  ano: 2012,
  atores: ['Jamie Foxx', 'Christoph Waltz', 'Leonardo DiCaprio', 'Samuel L. Jackson'],
  jaAssisti: true
};


filme['atores'] = ['Brad Pitt', "Christoph Waltz"];
console.log('Primeiro ator', filme.atores[0]);
console.log(filme);

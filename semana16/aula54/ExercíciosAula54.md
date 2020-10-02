### Exercício 1
a) Uma chave estrangeira serve para relacionar duas tabelas utilizando um id específico (no caso movie_id) e o id que é a chave primária da tabela a ser relacionada.

b)
```SQL
INSERT INTO Avaliacoes
VALUES (
"001",
"Nunca assisti Doce Mãe, mas parece um filme bom pra passar o tempo",
6.1,
"002"
),
(
"002",
"O Cheiro do Ralo certamente é um dos melhores filmes brasileiros já feitos",
9.5,
"004"
),
(
"003",
"O Cheiro do Ralo é um filme meio drama meio comédia, muito bom",
9.2,
"004"
);

INSERT INTO Avaliacoes
VALUES (
	"004",
    "Dona Flor e seus dois maridos é um clássico",
    8.7,
    "003"
),
(
	"005",
    "Abril Despedaçado é um drama excelente ambientado no sertão do Brasil",
    9,
    "001"
 );
 ```

 c) "Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_paulo_aguiar`.`Avaliacoes`, CONSTRAINT `Avaliacoes_ibfk_1` FOREIGN KEY (`filme_id`) REFERENCES `Filmes` (`id`))"
 Ele diz que pôde realizar a atualização por conta de um constraint da chave estrangeira. Como ele não achou o id do filme, a chave estrangeira não pôde ser relacionada com nenhuma tabela.

 d) 
 ```SQL
ALTER TABLE Filmes
DROP nota;
```

e) "Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_paulo_aguiar`.`Avaliacoes`, CONSTRAINT `Avaliacoes_ibfk_1` FOREIGN KEY (`filme_id`) REFERENCES `Filmes` (`id`))"
Novamente ele não pôde realizar a ação devido a uma litação imposta pela chave estrangeira. Isso ocorreu porque se o filme fosse apagado sua relação com a chave estrangeira de avaliações seria inexistente.

### Exercício 2
a) Essa é uma tabela apenas relacional, que será usada para ligar a tabela de atores à tabela de filmes.

b)
```SQL
INSERT INTO Elenco
VALUES ("004","001"),("001","006"),("002","005"),("001","001"),
("004","007"),("003","003");
```

c) "Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_paulo_aguiar`.`Elenco`, CONSTRAINT `Elenco_ibfk_2` FOREIGN KEY (`ator_id`) REFERENCES `Actor` (`id`))"
Ele falhou ao tentar relacionar uma chave estrangeira ao um ID inexistente.

d) "Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_paulo_aguiar`.`Elenco`, CONSTRAINT `Elenco_ibfk_2` FOREIGN KEY (`ator_id`) REFERENCES `Actor` (`id`))"
Não conseguimos apagar o ator, pois a referência a chave estrangeira do filme ao qual participa ficaria sem nenhuma ligação.

### Exercício 3
a) A query mostra a tabela Movie juntamente com a tabela Rating, levando em consideração a relação proposta na chave estrangeira. O operador ON determina a ligação da chave primária da tabela Movie com o movie_id da tabela Rating.

b)
```SQL
SELECT nome, nota, Filmes.id FROM Filmes
JOIN Avaliacoes ON Filmes.id = Avaliacoes.filme_id;
```

### Exercício 4
a)
```SQL
SELECT nome, Filmes.id, nota, comentario FROM Filmes
LEFT JOIN Avaliacoes ON Filmes.id = Avaliacoes.filme_id;
```

b)
```SQL
SELECT 
Filmes.id as "id do filme", 
Filmes.nome as "nome do filme", 
Elenco.ator_id as "id do ator"
FROM Filmes JOIN Elenco
ON Filmes.id = Elenco.filme_id;
```

c)
```SQL
SELECT AVG(nota) FROM Filmes
LEFT JOIN Avaliacoes ON Filmes.id = Avaliacoes.filme_id
GROUP BY nome;
```

### Exercício 5
a) A query lista todos os filmes, independente de ter avaliações e atores ou não. Então ela une as tabelas elenco e depois de atores. É necessário um join para cada tabela adicionada após a primeira.

b)
```SQL
SELECT 
Filmes.id as filme_id, 
Filmes.nome as filme_nome, 
Actor.id as ator_id,
Actor.name as ator_nome
FROM Filmes LEFT JOIN Elenco 
ON Filmes.id = Elenco.filme_id
JOIN Actor ON Actor.id = Elenco.ator_id;
```

c) "Error Code: 1054. Unknown column 'e.id' in 'on clause'"
Não conseguimos rodar pois a tabela Elenco é apenas relacional, ela não possui ID próprio.

d)
```SQL
SELECT Filmes.nome, Actor.name, Avaliacoes.nota, Avaliacoes.comentario FROM Filmes
LEFT JOIN Elenco ON Filmes.id = Elenco.filme_id
LEFT JOIN Actor ON Actor.id = Elenco.ator_id
LEFT JOIN Avaliacoes ON Filmes.id = Avaliacoes.filme_id;
```

### Exercício 6
a) A relação é N:M

b)
```SQL
CREATE TABLE Oscar (
	tipo VARCHAR(255),
	data DATE,
	filme_id VARCHAR(255),
	FOREIGN KEY (filme_id) REFERENCES Filmes(id)
);
```

c)
```SQL
INSERT INTO Oscar VALUES 
("001", "Melhor Filme", "2007-01-02", "004"),
("002", "Melhor ator", "2007-01-05", "004"),
("003", "Melhor Filme Estrangeiro", "2009-02-01", "001"),
("004", "Melhor Direção", "2009-01-04", "001"),
("005", "Melhor Roteiro", "2012-01-07", "002"),
("006", "Melhor Comédia", "2012-02-01", "002"),
("007", "Melhor Filme Estrangeiro", "2010-02-02", "005"),
("008", "Melhor atuação coadjuvante", "2010-01-05", "005"),
("009", "Melhor Roteiro", "2017-01-02", "003"),
("010", "Melhor Drama", "2017-01-01", "003");
```

d) 
```SQL
SELECT Filmes.nome as "nome do filme", Oscar.tipo as Oscar, Oscar.ano FROM Filmes
JOIN Oscar ON Filmes.id = Oscar.filme_id;
```

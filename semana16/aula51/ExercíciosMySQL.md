### Exercício 1
a) CREATE TABLE: cria uma nova tabela; VARCHAR: Utilizado para declarar strings; DATE: Para declarar datas; PRIMARY KEY: indica que é a key principal; NOT NULL: um constraint que indica que a coluna não deve ter um valor nulo.

b) Os comandos mostraram, respectivamente, o nome do banco de dados e o nome da tabela que acabamos de criar

c) Describe Actor mostrou todas as informações da tabela Actor

### Exercício 2
a) A query é:
```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pirez",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Entrada duplicada '002' para chave 'PRIMÁRIA'
Acorreu pois tentamos colocar dois itens indicados pela mesma key

c) Error Code: 1136. Column count doesn't match value count at row 1
Número de colunas não corresponde ao número referente na linha 1
Ocorreu pois temos declaramos apenas 3 colunas, quando nossa tabela tem 5

d) Error Code: 1364. Field 'name' doesn't have a default value
O campo 'nome' não possui um valor padrão
Ocorreu pois não declaramos o valor do campo nome, e ele não possui um valor padrão.

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Valor de data incorreto: '1950' para coluna 'birth_date' na linha 1
Ocorrou pois datas devem ser declaradas entre aspas

### Exercício 3
a) A query é:
```SQL
SELECT * from Actor where = gender = "female"
```
b)
```SQL
SELECT salary from Actor where name = "Tony Ramos"
```
c) 
```SQL
SELECT * from Actor where gender = "invalid"
```
Nada foi retornado, pois não temos nenhum input com o gender 'invalid' em nossa tabela

d)
```SQL
SELECT * from Actor where salary >= 500000
```
e) Error Code: 1054. Unknown column 'nome' in 'field list'
Coluna 'nome' desconhecida no 'campo lista'
Ocorreu pois não temos a coluna 'nome' e sim a coluna 'name'

### Exercício 4
a) Na query temos as ações SELECT * from Actor que indica uma seleção na tabela Actor e WHERE (onde) o nome pode começar com as letras A ou J, além do que, o atributo 'salary', deve ser maior que 300000
b) 
```SQL
SELECT * from  Actor where name NOT LIKE "A%" and salary > 350000
```
c) 
```SQL
SELECT * FROM Actor WHERE name LIKE "%G%" or "%g%" 
```
d) 
```SQL
SELECT * FROM Actor WHERE (name LIKE "%A%" or "%a%" or "%g%" or "%G%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
a) 
```SQL
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  sinopse TEXT NOT NULL,
  data_lancamento DATE NOT NULL,
  nota INT,
  CHECK (nota > 0 and < 10>)
);
```
O comando CREATE TABLE cria uma nova tabela. VARCHAR é usado para declarar strings, NOT NULL é para os campos não poderem ser nulos, INT para declarar números inteiros e CHECK para garantir que a nota vai de 0 a 1
b) 
```SQL
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, nota)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a 
    rotina do casamento. Um dia eles são atingidos por um fenômeno 
    inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```
c)
```SQL
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, nota)
VALUES(
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa
    grandes confusões. A vida dela e dos seus quatro filhos sofre uma 
    reviravolta depois que Zaida, empregada e amiga de Dona 
    Picucha, anuncia que vai se casar e não poderá mais morar 
    com ela",
    "2012-12-27",
    10
);
```
d)
```SQL
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, nota)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com 
    Vadinho, que só quer saber de farras e jogatina nas boates. 
    A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```
e)
```SQL
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, nota)
VALUES(
	"004",
    "O Cheiro do Ralo",
    "Ambientado em São Paulo, O Cheiro do Ralo narra a história de 
    Lourenço (Selton Mello), dono de uma loja que compra objetos 
    usados de pessoas que passam por dificuldades financeiras. 
    Dada a natureza de seu negócio - a aquisição sempre pelo menor 
    preço possível -, Lourenço acaba por desenvolver um jogo 
    perverso com seus clientes. Aos poucos, esse personagem 
    substitui, em seu relacionamento com os clientes, a frieza pelo 
    prazer que sente ao explorá-los em um momento de aflição 
    financeira. Perturbado pelo simbólico e fedorento cheiro do ralo 
    que existe na loja, Lourenço é colocado em confronto com o 
    universo e os personagens que julgava controlar. Isso o obriga a 
    uma reavaliação de sua visão de mundo e o conduz, de forma 
    inexorável, para um trágico desfecho. De certo modo, sua coleção 
    de tipos se rebela e se volta contra ele. Na loja, Lourenço 
    acaba sendo confrontado pelos personagens que julgava controlar.",
    "2007-03-23",
    7
);
```

### Exercício 6
a)
```SQL
SELECT id, nome, nota FROM Filmes WHERE id = "004"
```
b)
```SQL
SELECT * FROM Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";
```
c)
```SQL
SELECT id, nome, sinopse FROM Filmes WHERE nota >= 7
```

### Exercício 7
a)
```SQL
SELECT * FROM Filmes WHERE nome LIKE "%vida%"
```
b)
```SQL
SELECT * FROM Filmes WHERE nome OR sinopse LIKE "%personagens%"
```
c)
```SQL
SELECT * FROM Filmes WHERE data_lancamento <= "2020-08-10"
```
d) 
```SQL
SELECT * FROM Filmes WHERE (nome OR sinopse LIKE "%personagens%") and nota >= 7;
```

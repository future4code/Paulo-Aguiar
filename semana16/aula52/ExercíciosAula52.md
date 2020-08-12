### Exercício 1
a) Apaga a coluna salary

b) Atualiza o nome da coluna de gender para sex

c) Atualiza a alocação de memória da coluna gender

d) 
```SQL 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```
### Exercício 2
a)
```SQL
UPDATE Actor 
SET name = "Marjorie Estiano", birth_date = "1987-09-12"
WHERE id = "003"
```

b) 
```SQL
UPDATE Actor
SET name = "Juliana Pães"
WHERE name = "Juliana Paes"

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "Juliana Pães"
```

c) 
```SQL
UPDATE Actor 
SET 
name = "Débora Falabella", 
salary = 700000, 
birth_date = "1984-07-14", 
gender = "female"
WHERE id = "005";
```

d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Ele não deu erro, mas também não modificou nada, pois não encontrou o id em questão.

### Exercício 3
a)
```SQL
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

b)
```SQL
DELETE FROM Actor WHERE gender = "male" and salary > 1000000
```

### Exercício 4
a) 
```SQL
SELECT MAX(salary)
FROM Actor;
```

b) 
```SQL
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```

c)
```SQL
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
```

d)
```SQL
SELECT SUM(salary)
FROM Actor;
```

### Exercício 5
a) O resultado foi o retorno da contagem para o grupo masculino e outra para o grupo feminino.

b)
```SQL
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```SQL
SELECT * FROM Actor 
ORDER BY salary;
```

d)
```SQL
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;
```

e)
```SQL
SELECT gender, AVG(salary) FROM Actor
GROUP BY gender;
```

### Exercício 6
a)
```SQL
ALTER TABLE Filmes
ADD playing_limit_date VARCHAR (256);
```

b) 
```SQL
ALTER TABLE Filmes
CHANGE nota nota FLOAT;
```

c)
```SQL
UPDATE Filmes
SET playing_limit_date = "2020-09-01"
WHERE nome = "O Cheiro do Ralo";

UPDATE Filmes
SET playing_limit_date = "2012-01-08"
WHERE nome = "Dona Flor e Seus Dois Maridos";
```

d)
```SQL
DELETE FROM Filmes
WHERE id = "001";

UPDATE Filmes
SET sinopse = "Trocam de corpos"
WHERE id = "001";
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Ele não deu erro, mas também não realizou nenhuma mudança, pois não achou o id especificado.

### Exercício 7
a) 2 filmes
```SQL
SELECT COUNT(*) FROM Filmes
WHERE nota > 7.5;
```

b) Média de notas igual a 8.33
```SQL
SELECT AVG(nota) FROM Filmes;
```

c) 3 filmes em cartaz
```SQL
SELECT COUNT(*) FROM Filmes;
```

d) Nenhum filme ainda não foi lançado
```SQL
SELECT COUNT(*) FROM Filmes
WHERE data_lancamento > NOW();
```

e) A maior nota é 10
```SQL
SELECT MAX(nota) FROM Filmes;
```

f) A menor nota é 7
```SQL
SELECT MIN(nota) FROM Filmes;
```

### Exercício 8
a)
```SQL
SELECT * FROM Filmes
ORDER BY nome ASC;
```

b)
```SQL
SELECT * FROM Filmes
ORDER BY nome DESC LIMIT 5;
```

c)
```SQL
SELECT * FROM Filmes
ORDER BY data_lancamento LIMIT 3;
```

d)
```SQL
SELECT * FROM Filmes
ORDER BY nota LIMIT 3;
```

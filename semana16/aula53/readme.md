### Exercício 1
a) Temos o resultado das linhas da tabela, além de vários metadados que também são retornados.

b)
```javascript
async function getActorByName(name: string): Promise<any> {
  const result = await connection.raw(`
    SELECT * FROM Actor
    WHERE name = "${name}"
  `)
  console.log(result[0][0])
  return result[0][0]
}
```

c)
```javascript
async function getCountByGender(gender: string): Promise<any>{
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    GROUP BY gender
  `)

  console.log(result[0][0])
  return result[0][0]
}
```

### Exercício 2
a)
```javascript
async function updateSalaryById(id: string, salary: number): Promise<void> {
  await connection.update({salary}).from("Actor").where("id", "=", id)
}
```

b)
```javascript
async function deleteById(id: string): Promise<void> {
  await connection.from("Actor").where("id", "=", id).del()
}
```

c) 
```javascript
async function getAvgSalaryByGender(gender: string): Promise<any> {
  const result = await connection.from("Actor").where("gender", "=", gender).avg("salary")
  console.log(result)
}
```

### Exercício 3
a) O req.params permite a leitura do parâmetro passado pela URL, no caso, o id

b) As linhas são o status a resposta da requisição, caso dê certo, ou caso dê errado. Caso dê certo, vai ser retornado o status 200 e o ator em questão, caso dê errado, será retornado o status 400 e a mensagem d erro.

c)
```javascript
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const inputGender = req.query.gender as string
    const actorsCount = await getCountByGender(inputGender)
    res.status(200).send({"quantidade de atores desse sexo": actorsCount})
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})
```

### Exercício 4
a)
```javascript
app.post('/actor', async (req: Request, res: Response) => {
  try {
    await updateSalaryById(
      req.body.id,
      req.body.salary
    )

    res.status(200).send({Sucesso: "Salário atualizado"})
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})
```

b)
```javascript
app.delete('/actor/:id', async (request: Request, response: Response,) => {
  try {
    await deleteById(
      request.params.id
    )

    response.status(200).send({Sucesso: "Ator deletado"})
  } catch (error) {
    response.status(400).send({Erro: error.message})
  }
})
```

### Exercício 5
```javascript
async function createNewMovie(
  id: string, 
  nome: string, 
  sinopse: string, 
  data_lancamento: Date, 
  nota: number): Promise<void> {
  await connection.insert({id, nome, sinopse, data_lancamento, nota})
  .into("Filmes")
}

app.post('/movie', async (req: Request, res: Response) => {
  try {
    await createNewMovie(
      req.body.id,
      req.body.nome,
      req.body.sinopse,
      new Date(req.body.data_lancamento),
      req.body.nota,
    )

    res.status(200).send({Sucesso: "Filme cadastrado"})
  } catch (error) {
    res.status(400).send({erro: error.message})
  }
})
```

### Exercício 6
```javascript
async function getAllMovies(): Promise<any> {
  const moviesList = await connection.raw(`
    SELECT * FROM Filmes LIMIT 15
  `)
  return moviesList[0]
}

app.get('/movie/all', async (req: Request, res: Response) => {
  try {
    const moviesList = await getAllMovies()
  
    res.status(200).send({movies: moviesList})
  } catch (error) {
    res.status(400).send({erro: error.message})
  }
})
```

### Exercício 7
```javascript
async function searchMovie(word: string): Promise<any> {
  const movie = await connection.raw(`
    SELECT * FROM Filmes
    WHERE nome or sinopse like "%${word}%"
    ORDER BY data_lancamento
  `)
  return movie[0]
}

app.get('/movie', async (req: Request, resp: Response) => {
  try {
    const searchResult = await searchMovie(req.query.search as string)
    
    resp.status(200).send({result: searchResult})
  } catch (error) {
    resp.status(400).send({erro: error.message})
  }
})
```

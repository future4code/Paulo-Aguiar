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

### Exercício 1
a) É melhor do usar números sim, pois aumenta a complexidade e é mais fácil de utilizar

b) 
```javascript
import {v4} from "uuid"

export default class generateId {
  public CreateNewId(): string {
    return v4()
  }
}
```

### Exercício 2
a) Primeiro ele cria uma conexão com o banco de dados utilizando o knex e então temos uma função que iremos utilizar pra salvar os dados nesse banco.

b)
```SQL
CREATE TABLE User2(
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c)
```javascript
import {connection} from "../index"

export default class user {
  public async createNewUser(
    id: string,
    email: string, 
    password: string
  ): Promise<void> {
    connection.insert({
      id,
      email,
      password
    }).into('User2')
  }
}
```

### Exercício 3
a) Precisamos usar o "as string" para passar o token como string para a API, pois é dessa forma que ela recebe um token

b)
```javascript
export default class UserAuth {
  private static EXPIRES_IN = "1min"
  public createNewToken(id: string) {
    const token = jwt.sign(
      {
        id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: UserAuth.EXPIRES_IN
      }
    )
    return token
  }
}
```

### Exercício 5
```javascript
public async getUserInfoByEmail(email: string) {
  const info =  await connection.raw(`
      SELECT * FROM User2
      WHERE email = "${email}"
  `)
  return info[0][0]
  }
```

### Exercício 7
a) Devemos utilizar as any pois a verificação pode retornar vários resultados diferentes.


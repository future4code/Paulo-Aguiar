import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response, response } from 'express'
import {AddressInfo} from 'net'

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = "${id}"
  `)
  console.table(result [0][0])
  return result [0][0]
}

async function getActorByName(name: string): Promise<any> {
  const result = await connection.raw(`
    SELECT * FROM Actor
    WHERE name = "${name}"
  `)
  console.log(result[0][0])
  return result[0][0]
}

async function getCountByGender(gender: string): Promise<any>{
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    GROUP BY gender
  `)

  console.log(result[0][0])
  return result[0][0]
}

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

async function updateSalaryById(id: string, salary: number): Promise<void> {
  await connection.update({salary}).from("Actor").where("id", "=", id)
}


async function deleteById(id: string): Promise<void> {
  await connection.from("Actor").where("id", "=", id).del()
}

async function getAvgSalaryByGender(gender: string): Promise<any> {
  const result = await connection.from("Actor").where("gender", "=", gender).avg("salary")
  console.log(result)
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

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

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.birth_date),
      req.body.gender
    );

    res.status(200).send({Sucesso: "Ator cadastrado"});
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

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
import knex from "knex";
import dotenv from "dotenv";
import express, { response } from 'express'
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

getActorById("003")

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

async function returnAvgSalaryByGender(gender: string): Promise<void> {
  
}
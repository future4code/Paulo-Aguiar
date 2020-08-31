import { verifyAge, User, NATIONALITY, Casino, LOCATION } from "../src/Exercicio3"

test("Allowed brazilian user", () => {
  const brazilianCasino: Casino = {
    name: "Dinheiro Fácil",
    location: LOCATION.BRASIL
  }
  const userPatricia: User = {
    name: "Patrícia",
    nationality: NATIONALITY.BRAZILIAN,
    age: 19
  }
  const result = verifyAge(brazilianCasino, [userPatricia])
})
import { verifyAge, User, NATIONALITY, Casino, LOCATION } from "../src/Exercicio3"

const brazilianCasino: Casino = {
  name: "Dinheiro Fácil",
  location: LOCATION.BRASIL
}

const americanCasino: Casino = {
  name: "Izi Money",
  location: LOCATION.EUA
}

const userPatricia: User = {
  name: "Patrícia",
  nationality: NATIONALITY.BRAZILIAN,
  age: 19
}

const userPaulo: User = {
  name: "Paulo",
  nationality: NATIONALITY.BRAZILIAN,
  age: 19
}

const userConstantine: User = {
  name: "Constantine",
  age: 19,
  nationality: NATIONALITY.AMERICAN
}

const userStark: User = {
  name: "Robb",
  age: 19,
  nationality: NATIONALITY.AMERICAN
}

const userJon: User = {
  name: "Jon Snow",
  age: 21,
  nationality: NATIONALITY.AMERICAN
}

const userSansa: User = {
  name: "Sansa Stark",
  age: 21,
  nationality: NATIONALITY.AMERICAN
}

test("Allowed brazilian user, in brazilian casino", () => {
  const result = verifyAge(brazilianCasino, [userPatricia])

  expect(result).toEqual({
    ...result,
    brazilians: {
      allowed: ["Patrícia"],
      unallowed: []
    }
  })
})


test("Allowed american user, in brazilian casino", () => {

  const result = verifyAge(brazilianCasino, [userConstantine])

  expect(result.americans.allowed).toEqual(["Constantine"])
})

test("Minor americans and brazilian users entering american casino", () => {
  const result = verifyAge(americanCasino, [userConstantine, userPatricia, userPaulo, userStark])

  expect(result).toEqual({
    americans: {
      allowed: [],
      unallowed: ["Constantine", "Robb"]
    },
    brazilians: {
      allowed: [],
      unallowed: ["Patrícia", "Paulo"]
    }
  })
})

test("2 brasilian minors and 2 american above legal age entering an american casino", () => {
  const result = verifyAge(americanCasino, [userPatricia, userPaulo, userSansa, userJon])

  expect(result).toEqual({
    americans: {
      allowed: ["Sansa Stark", "Jon Snow"],
      unallowed: []
    },
    brazilians: {
      allowed: [],
      unallowed: ["Patrícia", "Paulo"]
    }
  })
})

test('legal age brazilian entering a brazilian casino, and array sizing test', () => {
  const result = verifyAge(brazilianCasino, [userPatricia])

  expect(result.brazilians.allowed.length).toBeLessThan(2)
  expect(result.brazilians.allowed.length).toBeGreaterThan(0)
})

test('legal age american entering a brazilian casino with array lenght test', () => {
  const result = verifyAge(brazilianCasino, [userSansa])

  expect(result.americans.unallowed).toHaveLength(0)
})

test('2 brazilians and 2 americans with age 19 entering an american casino, unallowed array must contain one of their names', () => {
  const result = verifyAge(americanCasino, [userPatricia, userPaulo, userStark, userConstantine])

  expect(result.americans.unallowed).toContain("Robb")
  expect(result.brazilians.unallowed).toContain("Patrícia")
})

test('2 19 aged brazilians and 2 21 aged americans', () => {
  const result = verifyAge(americanCasino, [userPatricia, userPaulo, userSansa, userJon])

  expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
  expect(result.americans.unallowed.length).toBeLessThan(1)
  expect(result.americans.allowed.length).toEqual(2)
  
})
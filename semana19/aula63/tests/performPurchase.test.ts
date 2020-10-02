import {performPurchase, User} from "../src/Exercicio1"

const user: User = {
  name: "Paulo",
  balance: 12000.00
}

test("User has enough balance", () => {
  const result = performPurchase(user, 1000)

  expect(result).toEqual({
    ...user,
    balance: 11000.00
  })
})

test("User has balance equal to purchase value", () => {
  const result = performPurchase(user, 11000)

  expect(result).toEqual({
    ...user,
    balance: 0
  })
})

test("User doesn't have enough balance", () => {
  const result = performPurchase(user, 15000)

  expect(result).toBeUndefined()
})
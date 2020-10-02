import { Character, validateCharacter } from "../src/Exercicio1"
import { isNull } from "util"

test('Return false for empty name', () => {
  const charWithoutName: Character = {
    name: '',
    hp: 1500,
    armor: 20,
    attack: 90
  }

  const result = validateCharacter(charWithoutName)

  expect(result).toBe(false)
})

test('Return false for empty HP', () => {
  const charWithoutHP: Character = {
    name: "Marcus",
    hp: undefined,
    armor: 20,
    attack: 90
  }

  const result = validateCharacter(charWithoutHP)

  expect(result).toBe(false)
})

test('Return false for empty atack', () => {
  const charWithoutAtk: Character = {
    name: "Marcus",
    hp: 1500,
    armor: 20,
    attack: undefined
  }

  const result = validateCharacter(charWithoutAtk)

  expect(result).toBe(false)
})

test('Return false for empty armor', () => {
  const charWithoutArmor: Character = {
    name: "Jon",
    hp: 1500,
    armor: Number(undefined),
    attack: 130
  }

  const result = validateCharacter(charWithoutArmor)

  expect(result).toBe(false)
})

test('Return false for negative stats', () => {
  const charWithNegativeStats: Character = {
    name: "Jon",
    hp: 1500,
    armor: -100,
    attack: 130
  }

  const result = validateCharacter(charWithNegativeStats)

  expect(result).toBe(false)
})

test('Return true for 0 stats', () => {
  const char: Character = {
    name: "Jon",
    hp: 1500,
    armor: 0,
    attack: 130
  }

  const result = validateCharacter(char)

  expect(result).toBe(true)
})

test('Return true for valid char', () => {
  const char: Character = {
    name: "Jon",
    hp: 1500,
    armor: 50,
    attack: 130
  }

  const result = validateCharacter(char)

  expect(result).toBe(true)
})
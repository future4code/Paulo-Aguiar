import { Character } from "../src/Exercicio1"
import { performAttackInverted } from "../src/Exercicio3"

test('Defender loses 200 hp', () => {
  const validateCharacterMock = jest.fn(() => {
    return true
  })

  const characterAtacking: Character = {
    name: "Pikachu",
    hp: 1500,
    attack: 300,
    armor: 50
  }

  const characterDefending: Character = {
    name: "Squirttle",
    hp: 1500,
    attack: 200,
    armor: 100
  }

  performAttackInverted(characterAtacking, characterDefending, validateCharacterMock)
  
  expect(characterDefending.hp).toEqual(1300)
  expect(validateCharacterMock).toHaveBeenCalled()
  expect(validateCharacterMock).toHaveBeenCalledTimes(2)
  expect(validateCharacterMock).toHaveReturnedTimes(2)
})

test('Test invalid character', () => {
  const validateCharacterMock = jest.fn(() => {
    return false
  })

  const characterAtacking: Character = {
    name: "Pikachu",
    hp: 1500,
    attack: 300,
    armor: 50
  }

  const characterDefending: Character = {
    name: "Squirttle",
    hp: 1500,
    attack: 200,
    armor: 100
  }

  try {
    performAttackInverted(characterAtacking, characterDefending, validateCharacterMock)
  } catch (error) {
    expect(error.message).toEqual("Invalid character")
    expect(validateCharacterMock).toHaveBeenCalled()
    expect(validateCharacterMock).toHaveBeenCalledTimes(1)
    expect(validateCharacterMock).toReturnWith(false)
    expect(validateCharacterMock).toHaveReturnedTimes(1)
  }  
})

test('Atacking HP must stay the same', () => {
  const validateCharacterMock = jest.fn(() => {
    return true
  })

  const characterAtacking: Character = {
    name: "Pikachu",
    hp: 1500,
    attack: 300,
    armor: 50
  }

  const characterDefending: Character = {
    name: "Squirttle",
    hp: 1500,
    attack: 200,
    armor: 100
  }

  performAttackInverted(characterAtacking, characterDefending, validateCharacterMock)

  expect(characterAtacking.hp).toEqual(1500)
})

test('Defending HP must stay the same, if validate is false', () => {
  const validateCharacterMock = jest.fn(() => {
    return false
  })

  const characterAtacking: Character = {
    name: "Pikachu",
    hp: 1500,
    attack: 300,
    armor: 50
  }

  const characterDefending: Character = {
    name: "Squirttle",
    hp: 1500,
    attack: 200,
    armor: 100
  }
  try {
    performAttackInverted(characterAtacking, characterDefending, validateCharacterMock)
  } catch (error) {
    expect(characterDefending.hp).toEqual(1500)
  }
})

test('Checking the name of attacker', () => {
  const validateCharacterMock = jest.fn(() => {
    return true
  })

  const characterAtacking: Character = {
    name: "Pikachu",
    hp: 1500,
    attack: 300,
    armor: 50
  }

  const characterDefending: Character = {
    name: "Squirttle",
    hp: 1500,
    attack: 200,
    armor: 100
  }
 
  performAttackInverted(characterAtacking, characterDefending, validateCharacterMock)
  expect(characterAtacking.name).toEqual("Pikachu")
})

test('Check if the defender HP is bellow max after the attack', () => {
  const validateCharacterMock = jest.fn(() => {
    return true
  })

  const characterAtacking: Character = {
    name: "Pikachu",
    hp: 1500,
    attack: 300,
    armor: 50
  }

  const characterDefending: Character = {
    name: "Squirttle",
    hp: 1500,
    attack: 200,
    armor: 100
  }
 
  performAttackInverted(characterAtacking, characterDefending, validateCharacterMock)
  expect(characterDefending.hp).toBeLessThan(1500)
})
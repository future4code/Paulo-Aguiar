import { Character, validateCharacter } from "./Exercicio1";

export function performAttack(atacker: Character, defender: Character) {
  if(!validateCharacter(atacker) || !validateCharacter(defender)) {
    throw new Error('Invalid character')
  }

  if(Number(atacker.attack) > Number(defender.armor)) {
    defender.hp = Number(defender.hp) - (Number(atacker.attack) - Number(defender.armor))
  } 
}

export function performAttackInverted(
  atacker: Character, 
  defender: Character,
  validator: (character: Character) => boolean
  ) {
  if(!validator(atacker) || !validator(defender)) {
    throw new Error('Invalid character')
  }

  if(Number(atacker.attack) > Number(defender.armor)) {
    defender.hp = Number(defender.hp) - (Number(atacker.attack) - Number(defender.armor))
  } 
}